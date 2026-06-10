import type { Options } from './types'
import { createUnplugin, type UnpluginFactory } from 'unplugin'
import {transform}from'@unplugin-classnames/core'

export const unpluginFactory: UnpluginFactory<
  Options | undefined
> = options => ({
  name: 'unplugin-classnames',
  transform
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
