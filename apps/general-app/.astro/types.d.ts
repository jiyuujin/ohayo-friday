declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content']
      headings: import('astro').MarkdownHeading[]
      remarkPluginFrontmatter: Record<string, any>
    }>
  }
}

declare module 'astro:content' {
  export { z } from 'astro/zod'
  export type CollectionEntry<C extends keyof typeof entryMap> =
    (typeof entryMap)[C][keyof (typeof entryMap)[C]]

  // TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
  /**
   * @deprecated
   * `astro:content` no longer provide `image()`.
   *
   * Please use it through `schema`, like such:
   * ```ts
   * import { defineCollection, z } from "astro:content";
   *
   * defineCollection({
   *   schema: ({ image }) =>
   *     z.object({
   *       image: image(),
   *     }),
   * });
   * ```
   */
  export const image: never

  // This needs to be in sync with ImageMetadata
  export type ImageFunction = () => import('astro/zod').ZodObject<{
    src: import('astro/zod').ZodString
    width: import('astro/zod').ZodNumber
    height: import('astro/zod').ZodNumber
    format: import('astro/zod').ZodUnion<
      [
        import('astro/zod').ZodLiteral<'png'>,
        import('astro/zod').ZodLiteral<'jpg'>,
        import('astro/zod').ZodLiteral<'jpeg'>,
        import('astro/zod').ZodLiteral<'tiff'>,
        import('astro/zod').ZodLiteral<'webp'>,
        import('astro/zod').ZodLiteral<'gif'>,
        import('astro/zod').ZodLiteral<'svg'>,
      ]
    >
  }>

  type BaseSchemaWithoutEffects =
    | import('astro/zod').AnyZodObject
    | import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
    | import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
    | import('astro/zod').ZodIntersection<
        import('astro/zod').AnyZodObject,
        import('astro/zod').AnyZodObject
      >

  type BaseSchema =
    | BaseSchemaWithoutEffects
    | import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>

  export type SchemaContext = { image: ImageFunction }

  type BaseCollectionConfig<S extends BaseSchema> = {
    schema?: S | ((context: SchemaContext) => S)
  }
  export function defineCollection<S extends BaseSchema>(
    input: BaseCollectionConfig<S>,
  ): BaseCollectionConfig<S>

  type EntryMapKeys = keyof typeof entryMap
  type AllValuesOf<T> = T extends any ? T[keyof T] : never
  type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug']

  export function getEntryBySlug<
    C extends keyof typeof entryMap,
    E extends ValidEntrySlug<C> | (string & {}),
  >(
    collection: C,
    // Note that this has to accept a regular string too, for SSR
    entrySlug: E,
  ): E extends ValidEntrySlug<C>
    ? Promise<CollectionEntry<C>>
    : Promise<CollectionEntry<C> | undefined>
  export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => entry is E,
  ): Promise<E[]>
  export function getCollection<C extends keyof typeof entryMap>(
    collection: C,
    filter?: (entry: CollectionEntry<C>) => unknown,
  ): Promise<CollectionEntry<C>[]>

  type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T
  type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
    ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
  >

  const entryMap: {
    posts: {
      '2022-11-11-weekly-archived.md': {
        id: '2022-11-11-weekly-archived.md'
        slug: '2022-11-11-weekly-archived'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2022-11-18-weekly-archived.md': {
        id: '2022-11-18-weekly-archived.md'
        slug: '2022-11-18-weekly-archived'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2022-11-25-weekly-archived.md': {
        id: '2022-11-25-weekly-archived.md'
        slug: '2022-11-25-weekly-archived'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2022-12-03-weekly-archived.md': {
        id: '2022-12-03-weekly-archived.md'
        slug: '2022-12-03-weekly-archived'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2022-12-10-weekly-archived.md': {
        id: '2022-12-10-weekly-archived.md'
        slug: '2022-12-10-weekly-archived'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2022-12-16-weekly-archived.md': {
        id: '2022-12-16-weekly-archived.md'
        slug: '2022-12-16-weekly-archived'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2022-12-23-weekly-archived.md': {
        id: '2022-12-23-weekly-archived.md'
        slug: '2022-12-23-weekly-archived'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-01-06-weekly-setup.md': {
        id: '2023-01-06-weekly-setup.md'
        slug: '2023-01-06-weekly-setup'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-01-13-weekly.md': {
        id: '2023-01-13-weekly.md'
        slug: '2023-01-13-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-01-20-weekly.md': {
        id: '2023-01-20-weekly.md'
        slug: '2023-01-20-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-01-27-weekly.md': {
        id: '2023-01-27-weekly.md'
        slug: '2023-01-27-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-02-03-weekly.md': {
        id: '2023-02-03-weekly.md'
        slug: '2023-02-03-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-02-10-weekly.md': {
        id: '2023-02-10-weekly.md'
        slug: '2023-02-10-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-02-17-weekly.md': {
        id: '2023-02-17-weekly.md'
        slug: '2023-02-17-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-02-24-weekly.md': {
        id: '2023-02-24-weekly.md'
        slug: '2023-02-24-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-03-03-weekly.md': {
        id: '2023-03-03-weekly.md'
        slug: '2023-03-03-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-03-10-weekly.md': {
        id: '2023-03-10-weekly.md'
        slug: '2023-03-10-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-03-16-weekly.md': {
        id: '2023-03-16-weekly.md'
        slug: '2023-03-16-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-03-24-weekly.md': {
        id: '2023-03-24-weekly.md'
        slug: '2023-03-24-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-03-31-weekly.md': {
        id: '2023-03-31-weekly.md'
        slug: '2023-03-31-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-04-07-weekly.md': {
        id: '2023-04-07-weekly.md'
        slug: '2023-04-07-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-04-14-weekly.md': {
        id: '2023-04-14-weekly.md'
        slug: '2023-04-14-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-04-21-weekly.md': {
        id: '2023-04-21-weekly.md'
        slug: '2023-04-21-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
      '2023-04-28-weekly.md': {
        id: '2023-04-28-weekly.md'
        slug: '2023-04-28-weekly'
        body: string
        collection: 'posts'
        data: InferEntrySchema<'posts'>
      } & { render(): Render['.md'] }
    }
  }

  type ContentConfig = typeof import('../src/content/config')
}