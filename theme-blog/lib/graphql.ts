export type Maybe<T> = T | null;

export interface StringQueryOperatorInput {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;
}

export interface DateQueryOperatorInput {
  eq?: Maybe<Date>;

  ne?: Maybe<Date>;

  gt?: Maybe<Date>;

  gte?: Maybe<Date>;

  lt?: Maybe<Date>;

  lte?: Maybe<Date>;

  in?: Maybe<(Maybe<Date>)[]>;

  nin?: Maybe<(Maybe<Date>)[]>;
}

export interface BlogPostFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  title?: Maybe<StringQueryOperatorInput>;

  body?: Maybe<StringQueryOperatorInput>;

  slug?: Maybe<StringQueryOperatorInput>;

  date?: Maybe<DateQueryOperatorInput>;

  tags?: Maybe<StringQueryOperatorInput>;

  keywords?: Maybe<StringQueryOperatorInput>;

  excerpt?: Maybe<StringQueryOperatorInput>;
}

export interface BlogPostSortInput {
  fields?: Maybe<(Maybe<BlogPostFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface FloatQueryOperatorInput {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface IntQueryOperatorInput {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface NodeFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;
}

export interface NodeFilterListInput {
  elemMatch?: Maybe<NodeFilterInput>;
}

export interface InternalFilterInput {
  content?: Maybe<StringQueryOperatorInput>;

  contentDigest?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;

  fieldOwners?: Maybe<StringQueryOperatorInput>;

  ignoreType?: Maybe<BooleanQueryOperatorInput>;

  mediaType?: Maybe<StringQueryOperatorInput>;

  owner?: Maybe<StringQueryOperatorInput>;

  type?: Maybe<StringQueryOperatorInput>;
}

export interface BooleanQueryOperatorInput {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface MdxFilterInput {
  rawBody?: Maybe<StringQueryOperatorInput>;

  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;

  frontmatter?: Maybe<MdxFrontmatterFilterInput>;

  body?: Maybe<StringQueryOperatorInput>;

  excerpt?: Maybe<StringQueryOperatorInput>;

  headings?: Maybe<MdxHeadingMdxFilterListInput>;

  html?: Maybe<StringQueryOperatorInput>;

  mdxAST?: Maybe<JsonQueryOperatorInput>;

  tableOfContents?: Maybe<JsonQueryOperatorInput>;

  timeToRead?: Maybe<IntQueryOperatorInput>;

  wordCount?: Maybe<MdxWordCountFilterInput>;

  fields?: Maybe<MdxFieldsFilterInput>;

  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>;
}

export interface MdxFrontmatterFilterInput {
  title?: Maybe<StringQueryOperatorInput>;

  status?: Maybe<StringQueryOperatorInput>;

  path?: Maybe<StringQueryOperatorInput>;

  date?: Maybe<DateQueryOperatorInput>;

  project?: Maybe<StringQueryOperatorInput>;
}

export interface MdxHeadingMdxFilterListInput {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
}

export interface MdxHeadingMdxFilterInput {
  value?: Maybe<StringQueryOperatorInput>;

  depth?: Maybe<IntQueryOperatorInput>;
}

export interface JsonQueryOperatorInput {
  eq?: Maybe<Json>;

  ne?: Maybe<Json>;

  in?: Maybe<(Maybe<Json>)[]>;

  nin?: Maybe<(Maybe<Json>)[]>;

  regex?: Maybe<Json>;

  glob?: Maybe<Json>;
}

export interface MdxWordCountFilterInput {
  paragraphs?: Maybe<IntQueryOperatorInput>;

  sentences?: Maybe<IntQueryOperatorInput>;

  words?: Maybe<IntQueryOperatorInput>;
}

export interface MdxFieldsFilterInput {
  slug?: Maybe<StringQueryOperatorInput>;

  projectId?: Maybe<StringQueryOperatorInput>;

  project?: Maybe<ProjectFilterInput>;
}

export interface ProjectFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  projectId?: Maybe<StringQueryOperatorInput>;

  slug?: Maybe<StringQueryOperatorInput>;

  title?: Maybe<StringQueryOperatorInput>;
}

export interface MdxBlogPostFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  title?: Maybe<StringQueryOperatorInput>;

  slug?: Maybe<StringQueryOperatorInput>;

  date?: Maybe<DateQueryOperatorInput>;

  tags?: Maybe<StringQueryOperatorInput>;

  keywords?: Maybe<StringQueryOperatorInput>;

  excerpt?: Maybe<StringQueryOperatorInput>;

  body?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;
}

export interface ImageSharpFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  fixed?: Maybe<ImageSharpFixedFilterInput>;

  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;

  fluid?: Maybe<ImageSharpFluidFilterInput>;

  sizes?: Maybe<ImageSharpSizesFilterInput>;

  original?: Maybe<ImageSharpOriginalFilterInput>;

  resize?: Maybe<ImageSharpResizeFilterInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;
}

export interface ImageSharpFixedFilterInput {
  base64?: Maybe<StringQueryOperatorInput>;

  tracedSVG?: Maybe<StringQueryOperatorInput>;

  aspectRatio?: Maybe<FloatQueryOperatorInput>;

  width?: Maybe<FloatQueryOperatorInput>;

  height?: Maybe<FloatQueryOperatorInput>;

  src?: Maybe<StringQueryOperatorInput>;

  srcSet?: Maybe<StringQueryOperatorInput>;

  srcWebp?: Maybe<StringQueryOperatorInput>;

  srcSetWebp?: Maybe<StringQueryOperatorInput>;

  originalName?: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpResolutionsFilterInput {
  base64?: Maybe<StringQueryOperatorInput>;

  tracedSVG?: Maybe<StringQueryOperatorInput>;

  aspectRatio?: Maybe<FloatQueryOperatorInput>;

  width?: Maybe<FloatQueryOperatorInput>;

  height?: Maybe<FloatQueryOperatorInput>;

  src?: Maybe<StringQueryOperatorInput>;

  srcSet?: Maybe<StringQueryOperatorInput>;

  srcWebp?: Maybe<StringQueryOperatorInput>;

  srcSetWebp?: Maybe<StringQueryOperatorInput>;

  originalName?: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpFluidFilterInput {
  base64?: Maybe<StringQueryOperatorInput>;

  tracedSVG?: Maybe<StringQueryOperatorInput>;

  aspectRatio?: Maybe<FloatQueryOperatorInput>;

  src?: Maybe<StringQueryOperatorInput>;

  srcSet?: Maybe<StringQueryOperatorInput>;

  srcWebp?: Maybe<StringQueryOperatorInput>;

  srcSetWebp?: Maybe<StringQueryOperatorInput>;

  sizes?: Maybe<StringQueryOperatorInput>;

  originalImg?: Maybe<StringQueryOperatorInput>;

  originalName?: Maybe<StringQueryOperatorInput>;

  presentationWidth?: Maybe<IntQueryOperatorInput>;

  presentationHeight?: Maybe<IntQueryOperatorInput>;
}

export interface ImageSharpSizesFilterInput {
  base64?: Maybe<StringQueryOperatorInput>;

  tracedSVG?: Maybe<StringQueryOperatorInput>;

  aspectRatio?: Maybe<FloatQueryOperatorInput>;

  src?: Maybe<StringQueryOperatorInput>;

  srcSet?: Maybe<StringQueryOperatorInput>;

  srcWebp?: Maybe<StringQueryOperatorInput>;

  srcSetWebp?: Maybe<StringQueryOperatorInput>;

  sizes?: Maybe<StringQueryOperatorInput>;

  originalImg?: Maybe<StringQueryOperatorInput>;

  originalName?: Maybe<StringQueryOperatorInput>;

  presentationWidth?: Maybe<IntQueryOperatorInput>;

  presentationHeight?: Maybe<IntQueryOperatorInput>;
}

export interface ImageSharpOriginalFilterInput {
  width?: Maybe<FloatQueryOperatorInput>;

  height?: Maybe<FloatQueryOperatorInput>;

  src?: Maybe<StringQueryOperatorInput>;
}

export interface ImageSharpResizeFilterInput {
  src?: Maybe<StringQueryOperatorInput>;

  tracedSVG?: Maybe<StringQueryOperatorInput>;

  width?: Maybe<IntQueryOperatorInput>;

  height?: Maybe<IntQueryOperatorInput>;

  aspectRatio?: Maybe<FloatQueryOperatorInput>;

  originalName?: Maybe<StringQueryOperatorInput>;
}

export interface DuotoneGradient {
  highlight: string;

  shadow: string;

  opacity?: Maybe<number>;
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>;

  turdSize?: Maybe<number>;

  alphaMax?: Maybe<number>;

  optCurve?: Maybe<boolean>;

  optTolerance?: Maybe<number>;

  threshold?: Maybe<number>;

  blackOnWhite?: Maybe<boolean>;

  color?: Maybe<string>;

  background?: Maybe<string>;
}

export interface FileFilterInput {
  birthtime?: Maybe<DateQueryOperatorInput>;

  birthtimeMs?: Maybe<FloatQueryOperatorInput>;

  sourceInstanceName?: Maybe<StringQueryOperatorInput>;

  absolutePath?: Maybe<StringQueryOperatorInput>;

  relativePath?: Maybe<StringQueryOperatorInput>;

  extension?: Maybe<StringQueryOperatorInput>;

  size?: Maybe<IntQueryOperatorInput>;

  prettySize?: Maybe<StringQueryOperatorInput>;

  modifiedTime?: Maybe<DateQueryOperatorInput>;

  accessTime?: Maybe<DateQueryOperatorInput>;

  changeTime?: Maybe<DateQueryOperatorInput>;

  birthTime?: Maybe<DateQueryOperatorInput>;

  root?: Maybe<StringQueryOperatorInput>;

  dir?: Maybe<StringQueryOperatorInput>;

  base?: Maybe<StringQueryOperatorInput>;

  ext?: Maybe<StringQueryOperatorInput>;

  name?: Maybe<StringQueryOperatorInput>;

  relativeDirectory?: Maybe<StringQueryOperatorInput>;

  dev?: Maybe<IntQueryOperatorInput>;

  mode?: Maybe<IntQueryOperatorInput>;

  nlink?: Maybe<IntQueryOperatorInput>;

  uid?: Maybe<IntQueryOperatorInput>;

  gid?: Maybe<IntQueryOperatorInput>;

  rdev?: Maybe<IntQueryOperatorInput>;

  blksize?: Maybe<IntQueryOperatorInput>;

  ino?: Maybe<FloatQueryOperatorInput>;

  blocks?: Maybe<IntQueryOperatorInput>;

  atimeMs?: Maybe<FloatQueryOperatorInput>;

  mtimeMs?: Maybe<FloatQueryOperatorInput>;

  ctimeMs?: Maybe<FloatQueryOperatorInput>;

  atime?: Maybe<DateQueryOperatorInput>;

  mtime?: Maybe<DateQueryOperatorInput>;

  ctime?: Maybe<DateQueryOperatorInput>;

  publicURL?: Maybe<StringQueryOperatorInput>;

  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  childMdx?: Maybe<MdxFilterInput>;

  childImageSharp?: Maybe<ImageSharpFilterInput>;
}

export interface FileSortInput {
  fields?: Maybe<(Maybe<FileFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface MdxSortInput {
  fields?: Maybe<(Maybe<MdxFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface ImageSharpSortInput {
  fields?: Maybe<(Maybe<ImageSharpFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface MdxBlogPostSortInput {
  fields?: Maybe<(Maybe<MdxBlogPostFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SitePageContextFilterInput {
  slug?: Maybe<StringQueryOperatorInput>;

  projectId?: Maybe<StringQueryOperatorInput>;

  id?: Maybe<StringQueryOperatorInput>;

  previousId?: Maybe<StringQueryOperatorInput>;

  nextId?: Maybe<StringQueryOperatorInput>;

  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
}

export interface SitePageContextFrontmatterFilterInput {
  path?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  resolve?: Maybe<StringQueryOperatorInput>;

  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;

  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;

  nodeAPIs?: Maybe<StringQueryOperatorInput>;

  browserAPIs?: Maybe<StringQueryOperatorInput>;

  ssrAPIs?: Maybe<StringQueryOperatorInput>;

  pluginFilepath?: Maybe<StringQueryOperatorInput>;

  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
}

export interface SitePluginPluginOptionsFilterInput {
  dest?: Maybe<StringQueryOperatorInput>;

  fonts?: Maybe<StringQueryOperatorInput>;

  name?: Maybe<StringQueryOperatorInput>;

  path?: Maybe<StringQueryOperatorInput>;

  extensions?: Maybe<StringQueryOperatorInput>;

  gatsbyRemarkPlugins?: Maybe<
    SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput
  >;

  contentPath?: Maybe<StringQueryOperatorInput>;

  basePath?: Maybe<StringQueryOperatorInput>;

  blogContentPath?: Maybe<StringQueryOperatorInput>;

  blogPostPath?: Maybe<StringQueryOperatorInput>;

  projectsContentPath?: Maybe<StringQueryOperatorInput>;

  projectsPath?: Maybe<StringQueryOperatorInput>;

  pathCheck?: Maybe<BooleanQueryOperatorInput>;

  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
}

export interface SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
}

export interface SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput {
  resolve?: Maybe<StringQueryOperatorInput>;

  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
}

export interface SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput {
  maxWidth?: Maybe<IntQueryOperatorInput>;

  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;

  pathPrefix?: Maybe<StringQueryOperatorInput>;

  wrapperStyle?: Maybe<StringQueryOperatorInput>;

  backgroundColor?: Maybe<StringQueryOperatorInput>;

  showCaptions?: Maybe<BooleanQueryOperatorInput>;

  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;

  withWebp?: Maybe<BooleanQueryOperatorInput>;

  tracedSVG?: Maybe<BooleanQueryOperatorInput>;

  loading?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPluginOptionsFeedsFilterListInput {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
}

export interface SitePluginPluginOptionsFeedsFilterInput {
  query?: Maybe<StringQueryOperatorInput>;

  output?: Maybe<StringQueryOperatorInput>;

  title?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;

  main?: Maybe<StringQueryOperatorInput>;

  author?: Maybe<StringQueryOperatorInput>;

  license?: Maybe<StringQueryOperatorInput>;

  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;

  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;

  keywords?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
}

export interface SitePluginPackageJsonDevDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterListInput {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
}

export interface SitePluginPackageJsonPeerDependenciesFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  version?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  path?: Maybe<StringQueryOperatorInput>;

  internalComponentName?: Maybe<StringQueryOperatorInput>;

  component?: Maybe<StringQueryOperatorInput>;

  componentChunkName?: Maybe<StringQueryOperatorInput>;

  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;

  context?: Maybe<SitePageContextFilterInput>;

  pluginCreator?: Maybe<SitePluginFilterInput>;

  pluginCreatorId?: Maybe<StringQueryOperatorInput>;

  componentPath?: Maybe<StringQueryOperatorInput>;
}

export interface SitePageSortInput {
  fields?: Maybe<(Maybe<SitePageFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SitePluginSortInput {
  fields?: Maybe<(Maybe<SitePluginFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SiteSiteMetadataFilterInput {
  title?: Maybe<StringQueryOperatorInput>;

  author?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;

  social?: Maybe<SiteSiteMetadataSocialFilterListInput>;

  siteUrl?: Maybe<StringQueryOperatorInput>;
}

export interface SiteSiteMetadataSocialFilterListInput {
  elemMatch?: Maybe<SiteSiteMetadataSocialFilterInput>;
}

export interface SiteSiteMetadataSocialFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  url?: Maybe<StringQueryOperatorInput>;
}

export interface SiteFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;

  port?: Maybe<IntQueryOperatorInput>;

  host?: Maybe<StringQueryOperatorInput>;

  polyfill?: Maybe<BooleanQueryOperatorInput>;

  pathPrefix?: Maybe<StringQueryOperatorInput>;

  buildTime?: Maybe<DateQueryOperatorInput>;
}

export interface SiteSortInput {
  fields?: Maybe<(Maybe<SiteFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface DirectoryFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  sourceInstanceName?: Maybe<StringQueryOperatorInput>;

  absolutePath?: Maybe<StringQueryOperatorInput>;

  relativePath?: Maybe<StringQueryOperatorInput>;

  extension?: Maybe<StringQueryOperatorInput>;

  size?: Maybe<IntQueryOperatorInput>;

  prettySize?: Maybe<StringQueryOperatorInput>;

  modifiedTime?: Maybe<DateQueryOperatorInput>;

  accessTime?: Maybe<DateQueryOperatorInput>;

  changeTime?: Maybe<DateQueryOperatorInput>;

  birthTime?: Maybe<DateQueryOperatorInput>;

  root?: Maybe<StringQueryOperatorInput>;

  dir?: Maybe<StringQueryOperatorInput>;

  base?: Maybe<StringQueryOperatorInput>;

  ext?: Maybe<StringQueryOperatorInput>;

  name?: Maybe<StringQueryOperatorInput>;

  relativeDirectory?: Maybe<StringQueryOperatorInput>;

  dev?: Maybe<IntQueryOperatorInput>;

  mode?: Maybe<IntQueryOperatorInput>;

  nlink?: Maybe<IntQueryOperatorInput>;

  uid?: Maybe<IntQueryOperatorInput>;

  gid?: Maybe<IntQueryOperatorInput>;

  rdev?: Maybe<IntQueryOperatorInput>;

  blksize?: Maybe<IntQueryOperatorInput>;

  ino?: Maybe<FloatQueryOperatorInput>;

  blocks?: Maybe<IntQueryOperatorInput>;

  atimeMs?: Maybe<FloatQueryOperatorInput>;

  mtimeMs?: Maybe<FloatQueryOperatorInput>;

  ctimeMs?: Maybe<FloatQueryOperatorInput>;

  birthtimeMs?: Maybe<FloatQueryOperatorInput>;

  atime?: Maybe<DateQueryOperatorInput>;

  mtime?: Maybe<DateQueryOperatorInput>;

  ctime?: Maybe<DateQueryOperatorInput>;

  birthtime?: Maybe<DateQueryOperatorInput>;
}

export interface DirectorySortInput {
  fields?: Maybe<(Maybe<DirectoryFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface ProjectSortInput {
  fields?: Maybe<(Maybe<ProjectFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export enum BlogPostFieldsEnum {
  id = 'id',
  title = 'title',
  body = 'body',
  slug = 'slug',
  date = 'date',
  tags = 'tags',
  keywords = 'keywords',
  excerpt = 'excerpt',
}

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
}

export enum FileFieldsEnum {
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  publicURL = 'publicURL',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___status = 'childMdx___frontmatter___status',
  childMdx___frontmatter___path = 'childMdx___frontmatter___path',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___project = 'childMdx___frontmatter___project',
  childMdx___body = 'childMdx___body',
  childMdx___excerpt = 'childMdx___excerpt',
  childMdx___headings = 'childMdx___headings',
  childMdx___headings___value = 'childMdx___headings___value',
  childMdx___headings___depth = 'childMdx___headings___depth',
  childMdx___html = 'childMdx___html',
  childMdx___mdxAST = 'childMdx___mdxAST',
  childMdx___tableOfContents = 'childMdx___tableOfContents',
  childMdx___timeToRead = 'childMdx___timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx___wordCount___paragraphs',
  childMdx___wordCount___sentences = 'childMdx___wordCount___sentences',
  childMdx___wordCount___words = 'childMdx___wordCount___words',
  childMdx___fields___slug = 'childMdx___fields___slug',
  childMdx___fields___projectId = 'childMdx___fields___projectId',
  childMdx___fields___project___id = 'childMdx___fields___project___id',
  childMdx___fields___project___children = 'childMdx___fields___project___children',
  childMdx___fields___project___projectId = 'childMdx___fields___project___projectId',
  childMdx___fields___project___slug = 'childMdx___fields___project___slug',
  childMdx___fields___project___title = 'childMdx___fields___project___title',
  childMdx___id = 'childMdx___id',
  childMdx___parent___id = 'childMdx___parent___id',
  childMdx___parent___parent___id = 'childMdx___parent___parent___id',
  childMdx___parent___parent___children = 'childMdx___parent___parent___children',
  childMdx___parent___children = 'childMdx___parent___children',
  childMdx___parent___children___id = 'childMdx___parent___children___id',
  childMdx___parent___children___children = 'childMdx___parent___children___children',
  childMdx___parent___internal___content = 'childMdx___parent___internal___content',
  childMdx___parent___internal___contentDigest = 'childMdx___parent___internal___contentDigest',
  childMdx___parent___internal___description = 'childMdx___parent___internal___description',
  childMdx___parent___internal___fieldOwners = 'childMdx___parent___internal___fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx___parent___internal___ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx___parent___internal___mediaType',
  childMdx___parent___internal___owner = 'childMdx___parent___internal___owner',
  childMdx___parent___internal___type = 'childMdx___parent___internal___type',
  childMdx___children = 'childMdx___children',
  childMdx___children___id = 'childMdx___children___id',
  childMdx___children___parent___id = 'childMdx___children___parent___id',
  childMdx___children___parent___children = 'childMdx___children___parent___children',
  childMdx___children___children = 'childMdx___children___children',
  childMdx___children___children___id = 'childMdx___children___children___id',
  childMdx___children___children___children = 'childMdx___children___children___children',
  childMdx___children___internal___content = 'childMdx___children___internal___content',
  childMdx___children___internal___contentDigest = 'childMdx___children___internal___contentDigest',
  childMdx___children___internal___description = 'childMdx___children___internal___description',
  childMdx___children___internal___fieldOwners = 'childMdx___children___internal___fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx___children___internal___ignoreType',
  childMdx___children___internal___mediaType = 'childMdx___children___internal___mediaType',
  childMdx___children___internal___owner = 'childMdx___children___internal___owner',
  childMdx___children___internal___type = 'childMdx___children___internal___type',
  childMdx___internal___content = 'childMdx___internal___content',
  childMdx___internal___contentDigest = 'childMdx___internal___contentDigest',
  childMdx___internal___description = 'childMdx___internal___description',
  childMdx___internal___fieldOwners = 'childMdx___internal___fieldOwners',
  childMdx___internal___ignoreType = 'childMdx___internal___ignoreType',
  childMdx___internal___mediaType = 'childMdx___internal___mediaType',
  childMdx___internal___owner = 'childMdx___internal___owner',
  childMdx___internal___type = 'childMdx___internal___type',
  childMdx___childMdxBlogPost___id = 'childMdx___childMdxBlogPost___id',
  childMdx___childMdxBlogPost___title = 'childMdx___childMdxBlogPost___title',
  childMdx___childMdxBlogPost___slug = 'childMdx___childMdxBlogPost___slug',
  childMdx___childMdxBlogPost___date = 'childMdx___childMdxBlogPost___date',
  childMdx___childMdxBlogPost___tags = 'childMdx___childMdxBlogPost___tags',
  childMdx___childMdxBlogPost___keywords = 'childMdx___childMdxBlogPost___keywords',
  childMdx___childMdxBlogPost___excerpt = 'childMdx___childMdxBlogPost___excerpt',
  childMdx___childMdxBlogPost___body = 'childMdx___childMdxBlogPost___body',
  childMdx___childMdxBlogPost___parent___id = 'childMdx___childMdxBlogPost___parent___id',
  childMdx___childMdxBlogPost___parent___children = 'childMdx___childMdxBlogPost___parent___children',
  childMdx___childMdxBlogPost___children = 'childMdx___childMdxBlogPost___children',
  childMdx___childMdxBlogPost___children___id = 'childMdx___childMdxBlogPost___children___id',
  childMdx___childMdxBlogPost___children___children = 'childMdx___childMdxBlogPost___children___children',
  childMdx___childMdxBlogPost___internal___content = 'childMdx___childMdxBlogPost___internal___content',
  childMdx___childMdxBlogPost___internal___contentDigest = 'childMdx___childMdxBlogPost___internal___contentDigest',
  childMdx___childMdxBlogPost___internal___description = 'childMdx___childMdxBlogPost___internal___description',
  childMdx___childMdxBlogPost___internal___fieldOwners = 'childMdx___childMdxBlogPost___internal___fieldOwners',
  childMdx___childMdxBlogPost___internal___ignoreType = 'childMdx___childMdxBlogPost___internal___ignoreType',
  childMdx___childMdxBlogPost___internal___mediaType = 'childMdx___childMdxBlogPost___internal___mediaType',
  childMdx___childMdxBlogPost___internal___owner = 'childMdx___childMdxBlogPost___internal___owner',
  childMdx___childMdxBlogPost___internal___type = 'childMdx___childMdxBlogPost___internal___type',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp___resolutions___base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp___resolutions___tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp___resolutions___aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp___resolutions___width',
  childImageSharp___resolutions___height = 'childImageSharp___resolutions___height',
  childImageSharp___resolutions___src = 'childImageSharp___resolutions___src',
  childImageSharp___resolutions___srcSet = 'childImageSharp___resolutions___srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp___resolutions___srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp___resolutions___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp___sizes___base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp___sizes___tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp___sizes___aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp___sizes___src',
  childImageSharp___sizes___srcSet = 'childImageSharp___sizes___srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp___sizes___srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp___sizes___sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp___sizes___originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp___sizes___originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp___sizes___presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp___sizes___presentationHeight',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
}

export enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___status = 'frontmatter___status',
  frontmatter___path = 'frontmatter___path',
  frontmatter___date = 'frontmatter___date',
  frontmatter___project = 'frontmatter___project',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  fields___slug = 'fields___slug',
  fields___projectId = 'fields___projectId',
  fields___project___id = 'fields___project___id',
  fields___project___parent___id = 'fields___project___parent___id',
  fields___project___parent___children = 'fields___project___parent___children',
  fields___project___children = 'fields___project___children',
  fields___project___children___id = 'fields___project___children___id',
  fields___project___children___children = 'fields___project___children___children',
  fields___project___internal___content = 'fields___project___internal___content',
  fields___project___internal___contentDigest = 'fields___project___internal___contentDigest',
  fields___project___internal___description = 'fields___project___internal___description',
  fields___project___internal___fieldOwners = 'fields___project___internal___fieldOwners',
  fields___project___internal___ignoreType = 'fields___project___internal___ignoreType',
  fields___project___internal___mediaType = 'fields___project___internal___mediaType',
  fields___project___internal___owner = 'fields___project___internal___owner',
  fields___project___internal___type = 'fields___project___internal___type',
  fields___project___projectId = 'fields___project___projectId',
  fields___project___slug = 'fields___project___slug',
  fields___project___title = 'fields___project___title',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  childMdxBlogPost___id = 'childMdxBlogPost___id',
  childMdxBlogPost___title = 'childMdxBlogPost___title',
  childMdxBlogPost___slug = 'childMdxBlogPost___slug',
  childMdxBlogPost___date = 'childMdxBlogPost___date',
  childMdxBlogPost___tags = 'childMdxBlogPost___tags',
  childMdxBlogPost___keywords = 'childMdxBlogPost___keywords',
  childMdxBlogPost___excerpt = 'childMdxBlogPost___excerpt',
  childMdxBlogPost___body = 'childMdxBlogPost___body',
  childMdxBlogPost___parent___id = 'childMdxBlogPost___parent___id',
  childMdxBlogPost___parent___parent___id = 'childMdxBlogPost___parent___parent___id',
  childMdxBlogPost___parent___parent___children = 'childMdxBlogPost___parent___parent___children',
  childMdxBlogPost___parent___children = 'childMdxBlogPost___parent___children',
  childMdxBlogPost___parent___children___id = 'childMdxBlogPost___parent___children___id',
  childMdxBlogPost___parent___children___children = 'childMdxBlogPost___parent___children___children',
  childMdxBlogPost___parent___internal___content = 'childMdxBlogPost___parent___internal___content',
  childMdxBlogPost___parent___internal___contentDigest = 'childMdxBlogPost___parent___internal___contentDigest',
  childMdxBlogPost___parent___internal___description = 'childMdxBlogPost___parent___internal___description',
  childMdxBlogPost___parent___internal___fieldOwners = 'childMdxBlogPost___parent___internal___fieldOwners',
  childMdxBlogPost___parent___internal___ignoreType = 'childMdxBlogPost___parent___internal___ignoreType',
  childMdxBlogPost___parent___internal___mediaType = 'childMdxBlogPost___parent___internal___mediaType',
  childMdxBlogPost___parent___internal___owner = 'childMdxBlogPost___parent___internal___owner',
  childMdxBlogPost___parent___internal___type = 'childMdxBlogPost___parent___internal___type',
  childMdxBlogPost___children = 'childMdxBlogPost___children',
  childMdxBlogPost___children___id = 'childMdxBlogPost___children___id',
  childMdxBlogPost___children___parent___id = 'childMdxBlogPost___children___parent___id',
  childMdxBlogPost___children___parent___children = 'childMdxBlogPost___children___parent___children',
  childMdxBlogPost___children___children = 'childMdxBlogPost___children___children',
  childMdxBlogPost___children___children___id = 'childMdxBlogPost___children___children___id',
  childMdxBlogPost___children___children___children = 'childMdxBlogPost___children___children___children',
  childMdxBlogPost___children___internal___content = 'childMdxBlogPost___children___internal___content',
  childMdxBlogPost___children___internal___contentDigest = 'childMdxBlogPost___children___internal___contentDigest',
  childMdxBlogPost___children___internal___description = 'childMdxBlogPost___children___internal___description',
  childMdxBlogPost___children___internal___fieldOwners = 'childMdxBlogPost___children___internal___fieldOwners',
  childMdxBlogPost___children___internal___ignoreType = 'childMdxBlogPost___children___internal___ignoreType',
  childMdxBlogPost___children___internal___mediaType = 'childMdxBlogPost___children___internal___mediaType',
  childMdxBlogPost___children___internal___owner = 'childMdxBlogPost___children___internal___owner',
  childMdxBlogPost___children___internal___type = 'childMdxBlogPost___children___internal___type',
  childMdxBlogPost___internal___content = 'childMdxBlogPost___internal___content',
  childMdxBlogPost___internal___contentDigest = 'childMdxBlogPost___internal___contentDigest',
  childMdxBlogPost___internal___description = 'childMdxBlogPost___internal___description',
  childMdxBlogPost___internal___fieldOwners = 'childMdxBlogPost___internal___fieldOwners',
  childMdxBlogPost___internal___ignoreType = 'childMdxBlogPost___internal___ignoreType',
  childMdxBlogPost___internal___mediaType = 'childMdxBlogPost___internal___mediaType',
  childMdxBlogPost___internal___owner = 'childMdxBlogPost___internal___owner',
  childMdxBlogPost___internal___type = 'childMdxBlogPost___internal___type',
}

export enum ImageSharpFieldsEnum {
  id = 'id',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export enum MdxBlogPostFieldsEnum {
  id = 'id',
  title = 'title',
  slug = 'slug',
  date = 'date',
  tags = 'tags',
  keywords = 'keywords',
  excerpt = 'excerpt',
  body = 'body',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
}

export enum SitePageFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  path = 'path',
  internalComponentName = 'internalComponentName',
  component = 'component',
  componentChunkName = 'componentChunkName',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___slug = 'context___slug',
  context___projectId = 'context___projectId',
  context___id = 'context___id',
  context___previousId = 'context___previousId',
  context___nextId = 'context___nextId',
  context___frontmatter___path = 'context___frontmatter___path',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___dest = 'pluginCreator___pluginOptions___dest',
  pluginCreator___pluginOptions___fonts = 'pluginCreator___pluginOptions___fonts',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginCreator___pluginOptions___contentPath = 'pluginCreator___pluginOptions___contentPath',
  pluginCreator___pluginOptions___basePath = 'pluginCreator___pluginOptions___basePath',
  pluginCreator___pluginOptions___blogContentPath = 'pluginCreator___pluginOptions___blogContentPath',
  pluginCreator___pluginOptions___blogPostPath = 'pluginCreator___pluginOptions___blogPostPath',
  pluginCreator___pluginOptions___projectsContentPath = 'pluginCreator___pluginOptions___projectsContentPath',
  pluginCreator___pluginOptions___projectsPath = 'pluginCreator___pluginOptions___projectsPath',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___pluginOptions___feeds = 'pluginCreator___pluginOptions___feeds',
  pluginCreator___pluginOptions___feeds___query = 'pluginCreator___pluginOptions___feeds___query',
  pluginCreator___pluginOptions___feeds___output = 'pluginCreator___pluginOptions___feeds___output',
  pluginCreator___pluginOptions___feeds___title = 'pluginCreator___pluginOptions___feeds___title',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
}

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___dest = 'pluginOptions___dest',
  pluginOptions___fonts = 'pluginOptions___fonts',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___gatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginOptions___gatsbyRemarkPlugins___options___maxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  pluginOptions___gatsbyRemarkPlugins___options___pathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
  pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
  pluginOptions___gatsbyRemarkPlugins___options___backgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
  pluginOptions___gatsbyRemarkPlugins___options___showCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
  pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
  pluginOptions___gatsbyRemarkPlugins___options___withWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
  pluginOptions___gatsbyRemarkPlugins___options___tracedSVG = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
  pluginOptions___gatsbyRemarkPlugins___options___loading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
  pluginOptions___contentPath = 'pluginOptions___contentPath',
  pluginOptions___basePath = 'pluginOptions___basePath',
  pluginOptions___blogContentPath = 'pluginOptions___blogContentPath',
  pluginOptions___blogPostPath = 'pluginOptions___blogPostPath',
  pluginOptions___projectsContentPath = 'pluginOptions___projectsContentPath',
  pluginOptions___projectsPath = 'pluginOptions___projectsPath',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  pluginOptions___feeds = 'pluginOptions___feeds',
  pluginOptions___feeds___query = 'pluginOptions___feeds___query',
  pluginOptions___feeds___output = 'pluginOptions___feeds___output',
  pluginOptions___feeds___title = 'pluginOptions___feeds___title',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords',
}

export enum SiteFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___author = 'siteMetadata___author',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___social = 'siteMetadata___social',
  siteMetadata___social___name = 'siteMetadata___social___name',
  siteMetadata___social___url = 'siteMetadata___social___url',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime',
}

export enum DirectoryFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum ProjectFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  projectId = 'projectId',
  slug = 'slug',
  title = 'title',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

// ====================================================
// Documents
// ====================================================

export namespace FeedSiteQuery {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    site: Maybe<Site>;
  };

  export type Site = {
    __typename?: 'Site';

    siteMetadata: Maybe<SiteMetadata>;
  };

  export type SiteMetadata = {
    __typename?: 'SiteSiteMetadata';

    title: Maybe<string>;

    description: Maybe<string>;

    siteUrl: Maybe<string>;

    site_url: Maybe<string>;
  };
}

export namespace FeedPostsQuery {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    allBlogPost: AllBlogPost;
  };

  export type AllBlogPost = {
    __typename?: 'BlogPostConnection';

    nodes: Nodes[];
  };

  export type Nodes = {
    __typename?: 'BlogPost';

    excerpt: string;

    date: Date;

    title: string;

    slug: string;
  };
}

export namespace CreateProjectPagesQuery {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    allFile: AllFile;
  };

  export type AllFile = {
    __typename?: 'FileConnection';

    nodes: Nodes[];
  };

  export type Nodes = {
    __typename?: 'File';

    childMdx: Maybe<ChildMdx>;
  };

  export type ChildMdx = {
    __typename?: 'Mdx';

    fields: Maybe<Fields>;
  };

  export type Fields = {
    __typename?: 'MdxFields';

    projectId: Maybe<string>;

    slug: Maybe<string>;
  };
}

export namespace LatestBlogPostsQuery {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    allBlogPost: AllBlogPost;
  };

  export type AllBlogPost = {
    __typename?: 'BlogPostConnection';

    nodes: Nodes[];
  };

  export type Nodes = {
    __typename?: MdxBlogPostInlineFragment['__typename'];

    id: string;

    body: string;

    slug: string;

    title: string;

    day: Date;

    month: Date;

    year: Date;
  } & MdxBlogPostInlineFragment;

  export type MdxBlogPostInlineFragment = {
    __typename?: 'MdxBlogPost';

    parent: Maybe<Parent>;
  };

  export type Parent = MdxInlineFragment;

  export type MdxInlineFragment = {
    __typename?: 'Mdx';

    fields: Maybe<Fields>;
  };

  export type Fields = {
    __typename?: 'MdxFields';

    project: Maybe<Project>;
  };

  export type Project = {
    __typename?: 'Project';

    projectId: Maybe<string>;

    slug: Maybe<string>;

    title: Maybe<string>;
  };
}

export namespace LayoutQuery {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    site: Maybe<Site>;
  };

  export type Site = {
    __typename?: 'Site';

    siteMetadata: Maybe<SiteMetadata>;
  };

  export type SiteMetadata = {
    __typename?: 'SiteSiteMetadata';

    title: Maybe<string>;

    description: Maybe<string>;
  };
}

export namespace ExtendedPostPageQuery {
  export type Variables = {
    id: string;
    previousId?: Maybe<string>;
    nextId?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    mdx: Maybe<Mdx>;

    blogPost: Maybe<BlogPost>;

    previous: Maybe<Previous>;

    next: Maybe<Next>;
  };

  export type Mdx = {
    __typename?: 'Mdx';

    fields: Maybe<Fields>;
  };

  export type Fields = {
    __typename?: 'MdxFields';

    project: Maybe<Project>;
  };

  export type Project = {
    __typename?: 'Project';

    title: Maybe<string>;

    slug: Maybe<string>;
  };

  export type BlogPost = {
    __typename?: 'BlogPost';

    id: string;

    excerpt: string;

    body: string;

    slug: string;

    title: string;

    tags: (Maybe<string>)[];

    keywords: (Maybe<string>)[];

    date: Date;
  };

  export type Previous = {
    __typename?: 'BlogPost';

    id: string;

    excerpt: string;

    slug: string;

    title: string;

    date: Date;
  };

  export type Next = {
    __typename?: 'BlogPost';

    id: string;

    excerpt: string;

    slug: string;

    title: string;

    date: Date;
  };
}

export namespace ProjectPageQuery {
  export type Variables = {
    slug: string;
    projectId: string;
  };

  export type Query = {
    __typename?: 'Query';

    mdx: Maybe<Mdx>;

    relatedPosts: RelatedPosts;
  };

  export type Mdx = {
    __typename?: 'Mdx';

    frontmatter: Maybe<Frontmatter>;

    body: string;
  };

  export type Frontmatter = {
    __typename?: 'MdxFrontmatter';

    title: string;
  };

  export type RelatedPosts = {
    __typename?: 'MdxConnection';

    nodes: Nodes[];
  };

  export type Nodes = {
    __typename?: 'Mdx';

    childMdxBlogPost: Maybe<ChildMdxBlogPost>;
  };

  export type ChildMdxBlogPost = {
    __typename?: 'MdxBlogPost';

    date: Date;

    excerpt: string;

    slug: string;

    title: string;
  };
}
