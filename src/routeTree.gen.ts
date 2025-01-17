/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MonkPhrasesImport } from './routes/monk-phrases'
import { Route as BattleTrackerImport } from './routes/battle-tracker'

// Create/Update Routes

const MonkPhrasesRoute = MonkPhrasesImport.update({
  id: '/monk-phrases',
  path: '/monk-phrases',
  getParentRoute: () => rootRoute,
} as any)

const BattleTrackerRoute = BattleTrackerImport.update({
  id: '/battle-tracker',
  path: '/battle-tracker',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/battle-tracker': {
      id: '/battle-tracker'
      path: '/battle-tracker'
      fullPath: '/battle-tracker'
      preLoaderRoute: typeof BattleTrackerImport
      parentRoute: typeof rootRoute
    }
    '/monk-phrases': {
      id: '/monk-phrases'
      path: '/monk-phrases'
      fullPath: '/monk-phrases'
      preLoaderRoute: typeof MonkPhrasesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/battle-tracker': typeof BattleTrackerRoute
  '/monk-phrases': typeof MonkPhrasesRoute
}

export interface FileRoutesByTo {
  '/battle-tracker': typeof BattleTrackerRoute
  '/monk-phrases': typeof MonkPhrasesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/battle-tracker': typeof BattleTrackerRoute
  '/monk-phrases': typeof MonkPhrasesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/battle-tracker' | '/monk-phrases'
  fileRoutesByTo: FileRoutesByTo
  to: '/battle-tracker' | '/monk-phrases'
  id: '__root__' | '/battle-tracker' | '/monk-phrases'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  BattleTrackerRoute: typeof BattleTrackerRoute
  MonkPhrasesRoute: typeof MonkPhrasesRoute
}

const rootRouteChildren: RootRouteChildren = {
  BattleTrackerRoute: BattleTrackerRoute,
  MonkPhrasesRoute: MonkPhrasesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/battle-tracker",
        "/monk-phrases"
      ]
    },
    "/battle-tracker": {
      "filePath": "battle-tracker.tsx"
    },
    "/monk-phrases": {
      "filePath": "monk-phrases.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
