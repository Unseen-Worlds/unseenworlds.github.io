import styled from "styled-components"
import { Subscribe } from "unstated"
import { Sans } from "components/ui/Typography"
import React, { Fragment } from "react"
import { TreeNode, pathListToTree } from "./utils/pathListToTree"
import { NavState } from "./NavState"
import { Link, StaticQuery, graphql } from "gatsby"
import { get, includes, reject, sortBy } from "lodash"
import { Box } from "rebass"

export const NavTree = _props => {
  return (
    <StaticQuery
      query={graphql`
        query NavTreeQuery {
          allMdx {
            edges {
              node {
                fields {
                  route
                }
                frontmatter {
                  title
                  # navSpacer
                  # showInNav
                }
              }
            }
          }
        }
      `}
      render={data => {
        return renderNavTree(buildNavTree(data))
      }}
    />
  )
}

function renderNavTree(tree: TreeNode[], treeDepth: number = 0) {
  const getTreeLayout = () => {
    if (treeDepth > 0) {
      return {
        ml: 2,
        py: 0.3,
        size: "2",
      }
    } else {
      return {
        ml: 0,
        py: 0.2,
        size: "3",
      }
    }
  }

  const { ml, py, size } = getTreeLayout()

  return (
    <Subscribe to={[NavState]}>
      {(navState: NavState) => (
        <Box ml={ml}>
          {tree.map(({ data, children, formattedName, path }: TreeNode) => {
            const hasChildren = Boolean(children.length)
            const navSpacer = get(data, "navSpacer", {})

            switch (hasChildren) {
              case true: {
                treeDepth++
                const expanded = includes(navState.state.expandedNavItems, path)

                return (
                  <Fragment key={path}>
                    <Sans size={size} py={py} {...navSpacer}>
                      {/*
                        Don't navigate, just toggle subnav open and closed
                      */}
                      <NavLink
                        disableNavigation
                        to={path}
                        onClick={() => {
                          navState.toggleNavItem(path)

                          // Recompute tree since subnav could be open or closed
                          treeDepth = 0
                        }}
                      >
                        {formattedName}
                      </NavLink>
                    </Sans>
                    {expanded && renderNavTree(children, treeDepth)}
                  </Fragment>
                )
              }
              case false: {
                return (
                  <Fragment key={path}>
                    <Sans size={size} py={py} {...navSpacer}>
                      <NavLink to={path}>{formattedName}</NavLink>
                    </Sans>
                  </Fragment>
                )
              }
            }
          })}
        </Box>
      )}
    </Subscribe>
  )
}

// TODO: Add type once Apollo generator is fixed
function buildNavTree(data) {
  const routes = data.allMdx.edges.reduce((acc, { node }) => {
    const { route } = node.fields
    if (route.length) {
      return [
        ...acc,
        {
          path: route,
          data: node.frontmatter,
        },
      ]
    } else {
      return acc
    }
  }, [])

  // Perform various operations depending on frontmatter
  const sorted = sortBy(routes, route => route.data.order)
  const visible = reject(sorted, route => route.data.hideInNav)
  const navTree = pathListToTree(visible).map(path => path.children)[0]
  return navTree
}

const NavLinkWrapper = ({
  className,
  children,
  disableNavigation,
  to,
  ...props
}) => {
  /**
   * If a nav item is disabled and has children it will toggle its children
   * open and closed, but not navigate. If we want parent nav items to show
   * their own page *and* toggle, set this prop to false.
   */
  if (disableNavigation) {
    return (
      <Box className={className} {...props}>
        {children}
      </Box>
    )
  } else {
    return (
      <Link to={to} activeClassName="isActive" className={className} {...props}>
        {children}
      </Link>
    )
  }
}

const NavLink = styled(NavLinkWrapper)`
  cursor: pointer;

  &&.isActive {
    color: purple;

    &:after {
      content: " * ";
    }

    &:hover {
      text-decoration: underline;
      color: purple;
    }
  }
`
