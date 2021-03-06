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

export interface ImageSharpFilterInput {
  fixed?: Maybe<ImageSharpFixedFilterInput>;

  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;

  fluid?: Maybe<ImageSharpFluidFilterInput>;

  sizes?: Maybe<ImageSharpSizesFilterInput>;

  original?: Maybe<ImageSharpOriginalFilterInput>;

  resize?: Maybe<ImageSharpResizeFilterInput>;

  id?: Maybe<StringQueryOperatorInput>;

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

  childProject?: Maybe<ProjectFilterInput>;

  childSidebar?: Maybe<SidebarFilterInput>;

  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>;
}

export interface MdxFrontmatterFilterInput {
  title?: Maybe<StringQueryOperatorInput>;

  status?: Maybe<StringQueryOperatorInput>;

  license?: Maybe<StringQueryOperatorInput>;

  sidebar?: Maybe<StringQueryOperatorInput>;

  path?: Maybe<StringQueryOperatorInput>;

  date?: Maybe<DateQueryOperatorInput>;

  project?: Maybe<StringQueryOperatorInput>;

  comments?: Maybe<StringQueryOperatorInput>;

  projects?: Maybe<StringQueryOperatorInput>;

  tags?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;

  featured_image?: Maybe<FileFilterInput>;
}

export interface FileFilterInput {
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

  ino?: Maybe<FloatQueryOperatorInput>;

  atimeMs?: Maybe<FloatQueryOperatorInput>;

  mtimeMs?: Maybe<FloatQueryOperatorInput>;

  ctimeMs?: Maybe<FloatQueryOperatorInput>;

  atime?: Maybe<DateQueryOperatorInput>;

  mtime?: Maybe<DateQueryOperatorInput>;

  ctime?: Maybe<DateQueryOperatorInput>;

  birthtime?: Maybe<DateQueryOperatorInput>;

  birthtimeMs?: Maybe<FloatQueryOperatorInput>;

  blksize?: Maybe<IntQueryOperatorInput>;

  blocks?: Maybe<IntQueryOperatorInput>;

  publicURL?: Maybe<StringQueryOperatorInput>;

  childImageSharp?: Maybe<ImageSharpFilterInput>;

  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

  childMdx?: Maybe<MdxFilterInput>;
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

export interface SidebarFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;

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

  fields?: Maybe<MdxBlogPostFieldsFilterInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;
}

export interface MdxBlogPostFieldsFilterInput {
  commentsStatus?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;
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

export interface FileSortInput {
  fields?: Maybe<(Maybe<FileFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface DirectoryFilterInput {
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

  ino?: Maybe<FloatQueryOperatorInput>;

  atimeMs?: Maybe<FloatQueryOperatorInput>;

  mtimeMs?: Maybe<FloatQueryOperatorInput>;

  ctimeMs?: Maybe<FloatQueryOperatorInput>;

  atime?: Maybe<DateQueryOperatorInput>;

  mtime?: Maybe<DateQueryOperatorInput>;

  ctime?: Maybe<DateQueryOperatorInput>;

  birthtime?: Maybe<DateQueryOperatorInput>;

  birthtimeMs?: Maybe<FloatQueryOperatorInput>;

  blksize?: Maybe<IntQueryOperatorInput>;

  blocks?: Maybe<IntQueryOperatorInput>;

  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;
}

export interface DirectorySortInput {
  fields?: Maybe<(Maybe<DirectoryFieldsEnum>)[]>;

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

export interface MdxSortInput {
  fields?: Maybe<(Maybe<MdxFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface PostCommentFilterInput {
  name?: Maybe<StringQueryOperatorInput>;

  body?: Maybe<StringQueryOperatorInput>;

  createdAt?: Maybe<DateQueryOperatorInput>;

  gravatarHash?: Maybe<StringQueryOperatorInput>;

  post?: Maybe<MdxBlogPostFilterInput>;

  isSpam?: Maybe<BooleanQueryOperatorInput>;

  inReplyTo?: Maybe<StringQueryOperatorInput>;

  url?: Maybe<StringQueryOperatorInput>;

  email?: Maybe<StringQueryOperatorInput>;

  isTrashed?: Maybe<BooleanQueryOperatorInput>;

  ip?: Maybe<StringQueryOperatorInput>;

  path?: Maybe<StringQueryOperatorInput>;

  id?: Maybe<StringQueryOperatorInput>;

  parent?: Maybe<NodeFilterInput>;

  children?: Maybe<NodeFilterListInput>;

  internal?: Maybe<InternalFilterInput>;
}

export interface PostCommentSortInput {
  fields?: Maybe<(Maybe<PostCommentFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SidebarSortInput {
  fields?: Maybe<(Maybe<SidebarFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface ProjectSortInput {
  fields?: Maybe<(Maybe<ProjectFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SiteSiteMetadataFilterInput {
  title?: Maybe<StringQueryOperatorInput>;

  author?: Maybe<StringQueryOperatorInput>;

  description?: Maybe<StringQueryOperatorInput>;

  social?: Maybe<SiteSiteMetadataSocialFilterListInput>;

  siteUrl?: Maybe<StringQueryOperatorInput>;

  addCommentUrl?: Maybe<StringQueryOperatorInput>;
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

export interface SitePluginPluginOptionsFilterInput {
  dest?: Maybe<StringQueryOperatorInput>;

  fonts?: Maybe<StringQueryOperatorInput>;

  query?: Maybe<StringQueryOperatorInput>;

  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;

  name?: Maybe<StringQueryOperatorInput>;

  path?: Maybe<StringQueryOperatorInput>;

  extensions?: Maybe<StringQueryOperatorInput>;

  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;

  gatsbyRemarkPlugins?: Maybe<
    SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput
  >;

  mdx?: Maybe<BooleanQueryOperatorInput>;

  contentPath?: Maybe<StringQueryOperatorInput>;

  basePath?: Maybe<StringQueryOperatorInput>;

  blogContentPath?: Maybe<StringQueryOperatorInput>;

  blogPostPath?: Maybe<StringQueryOperatorInput>;

  projectsContentPath?: Maybe<StringQueryOperatorInput>;

  projectsPath?: Maybe<StringQueryOperatorInput>;

  sidebarContentPath?: Maybe<StringQueryOperatorInput>;

  feedName?: Maybe<StringQueryOperatorInput>;

  feedPath?: Maybe<StringQueryOperatorInput>;

  feedUrl?: Maybe<StringQueryOperatorInput>;

  firebaseKeyPath?: Maybe<StringQueryOperatorInput>;

  firebaseConfig?: Maybe<SitePluginPluginOptionsFirebaseConfigFilterInput>;

  pathCheck?: Maybe<BooleanQueryOperatorInput>;
}

export interface SitePluginPluginOptionsFeedsFilterListInput {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
}

export interface SitePluginPluginOptionsFeedsFilterInput {
  query?: Maybe<StringQueryOperatorInput>;

  output?: Maybe<StringQueryOperatorInput>;

  title?: Maybe<StringQueryOperatorInput>;

  match?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPluginOptionsDefaultLayoutsFilterInput {
  pages?: Maybe<StringQueryOperatorInput>;
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

  showCaptions?: Maybe<StringQueryOperatorInput>;

  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;

  pathPrefix?: Maybe<StringQueryOperatorInput>;

  wrapperStyle?: Maybe<StringQueryOperatorInput>;

  backgroundColor?: Maybe<StringQueryOperatorInput>;

  withWebp?: Maybe<BooleanQueryOperatorInput>;

  tracedSVG?: Maybe<BooleanQueryOperatorInput>;

  loading?: Maybe<StringQueryOperatorInput>;

  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;

  disableBgImage?: Maybe<BooleanQueryOperatorInput>;

  inlineCodeMarker?: Maybe<StringQueryOperatorInput>;
}

export interface SitePluginPluginOptionsFirebaseConfigFilterInput {
  databaseURL?: Maybe<StringQueryOperatorInput>;
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

export interface SitePluginSortInput {
  fields?: Maybe<(Maybe<SitePluginFieldsEnum>)[]>;

  order?: (Maybe<SortOrderEnum>)[];
}

export interface SitePageContextFilterInput {
  id?: Maybe<StringQueryOperatorInput>;

  previousId?: Maybe<StringQueryOperatorInput>;

  nextId?: Maybe<StringQueryOperatorInput>;

  slug?: Maybe<StringQueryOperatorInput>;

  projectId?: Maybe<StringQueryOperatorInput>;

  sidebarSlugs?: Maybe<StringQueryOperatorInput>;

  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
}

export interface SitePageContextFrontmatterFilterInput {
  path?: Maybe<StringQueryOperatorInput>;
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

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum FileFieldsEnum {
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
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
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
  childImageSharp___id = 'childImageSharp___id',
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
  childMdx___frontmatter___license = 'childMdx___frontmatter___license',
  childMdx___frontmatter___sidebar = 'childMdx___frontmatter___sidebar',
  childMdx___frontmatter___path = 'childMdx___frontmatter___path',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___project = 'childMdx___frontmatter___project',
  childMdx___frontmatter___comments = 'childMdx___frontmatter___comments',
  childMdx___frontmatter___projects = 'childMdx___frontmatter___projects',
  childMdx___frontmatter___tags = 'childMdx___frontmatter___tags',
  childMdx___frontmatter___description = 'childMdx___frontmatter___description',
  childMdx___frontmatter___featured_image___sourceInstanceName = 'childMdx___frontmatter___featured_image___sourceInstanceName',
  childMdx___frontmatter___featured_image___absolutePath = 'childMdx___frontmatter___featured_image___absolutePath',
  childMdx___frontmatter___featured_image___relativePath = 'childMdx___frontmatter___featured_image___relativePath',
  childMdx___frontmatter___featured_image___extension = 'childMdx___frontmatter___featured_image___extension',
  childMdx___frontmatter___featured_image___size = 'childMdx___frontmatter___featured_image___size',
  childMdx___frontmatter___featured_image___prettySize = 'childMdx___frontmatter___featured_image___prettySize',
  childMdx___frontmatter___featured_image___modifiedTime = 'childMdx___frontmatter___featured_image___modifiedTime',
  childMdx___frontmatter___featured_image___accessTime = 'childMdx___frontmatter___featured_image___accessTime',
  childMdx___frontmatter___featured_image___changeTime = 'childMdx___frontmatter___featured_image___changeTime',
  childMdx___frontmatter___featured_image___birthTime = 'childMdx___frontmatter___featured_image___birthTime',
  childMdx___frontmatter___featured_image___root = 'childMdx___frontmatter___featured_image___root',
  childMdx___frontmatter___featured_image___dir = 'childMdx___frontmatter___featured_image___dir',
  childMdx___frontmatter___featured_image___base = 'childMdx___frontmatter___featured_image___base',
  childMdx___frontmatter___featured_image___ext = 'childMdx___frontmatter___featured_image___ext',
  childMdx___frontmatter___featured_image___name = 'childMdx___frontmatter___featured_image___name',
  childMdx___frontmatter___featured_image___relativeDirectory = 'childMdx___frontmatter___featured_image___relativeDirectory',
  childMdx___frontmatter___featured_image___dev = 'childMdx___frontmatter___featured_image___dev',
  childMdx___frontmatter___featured_image___mode = 'childMdx___frontmatter___featured_image___mode',
  childMdx___frontmatter___featured_image___nlink = 'childMdx___frontmatter___featured_image___nlink',
  childMdx___frontmatter___featured_image___uid = 'childMdx___frontmatter___featured_image___uid',
  childMdx___frontmatter___featured_image___gid = 'childMdx___frontmatter___featured_image___gid',
  childMdx___frontmatter___featured_image___rdev = 'childMdx___frontmatter___featured_image___rdev',
  childMdx___frontmatter___featured_image___ino = 'childMdx___frontmatter___featured_image___ino',
  childMdx___frontmatter___featured_image___atimeMs = 'childMdx___frontmatter___featured_image___atimeMs',
  childMdx___frontmatter___featured_image___mtimeMs = 'childMdx___frontmatter___featured_image___mtimeMs',
  childMdx___frontmatter___featured_image___ctimeMs = 'childMdx___frontmatter___featured_image___ctimeMs',
  childMdx___frontmatter___featured_image___atime = 'childMdx___frontmatter___featured_image___atime',
  childMdx___frontmatter___featured_image___mtime = 'childMdx___frontmatter___featured_image___mtime',
  childMdx___frontmatter___featured_image___ctime = 'childMdx___frontmatter___featured_image___ctime',
  childMdx___frontmatter___featured_image___birthtime = 'childMdx___frontmatter___featured_image___birthtime',
  childMdx___frontmatter___featured_image___birthtimeMs = 'childMdx___frontmatter___featured_image___birthtimeMs',
  childMdx___frontmatter___featured_image___blksize = 'childMdx___frontmatter___featured_image___blksize',
  childMdx___frontmatter___featured_image___blocks = 'childMdx___frontmatter___featured_image___blocks',
  childMdx___frontmatter___featured_image___publicURL = 'childMdx___frontmatter___featured_image___publicURL',
  childMdx___frontmatter___featured_image___id = 'childMdx___frontmatter___featured_image___id',
  childMdx___frontmatter___featured_image___children = 'childMdx___frontmatter___featured_image___children',
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
  childMdx___childProject___id = 'childMdx___childProject___id',
  childMdx___childProject___parent___id = 'childMdx___childProject___parent___id',
  childMdx___childProject___parent___children = 'childMdx___childProject___parent___children',
  childMdx___childProject___children = 'childMdx___childProject___children',
  childMdx___childProject___children___id = 'childMdx___childProject___children___id',
  childMdx___childProject___children___children = 'childMdx___childProject___children___children',
  childMdx___childProject___internal___content = 'childMdx___childProject___internal___content',
  childMdx___childProject___internal___contentDigest = 'childMdx___childProject___internal___contentDigest',
  childMdx___childProject___internal___description = 'childMdx___childProject___internal___description',
  childMdx___childProject___internal___fieldOwners = 'childMdx___childProject___internal___fieldOwners',
  childMdx___childProject___internal___ignoreType = 'childMdx___childProject___internal___ignoreType',
  childMdx___childProject___internal___mediaType = 'childMdx___childProject___internal___mediaType',
  childMdx___childProject___internal___owner = 'childMdx___childProject___internal___owner',
  childMdx___childProject___internal___type = 'childMdx___childProject___internal___type',
  childMdx___childProject___projectId = 'childMdx___childProject___projectId',
  childMdx___childProject___slug = 'childMdx___childProject___slug',
  childMdx___childProject___title = 'childMdx___childProject___title',
  childMdx___childSidebar___id = 'childMdx___childSidebar___id',
  childMdx___childSidebar___parent___id = 'childMdx___childSidebar___parent___id',
  childMdx___childSidebar___parent___children = 'childMdx___childSidebar___parent___children',
  childMdx___childSidebar___children = 'childMdx___childSidebar___children',
  childMdx___childSidebar___children___id = 'childMdx___childSidebar___children___id',
  childMdx___childSidebar___children___children = 'childMdx___childSidebar___children___children',
  childMdx___childSidebar___internal___content = 'childMdx___childSidebar___internal___content',
  childMdx___childSidebar___internal___contentDigest = 'childMdx___childSidebar___internal___contentDigest',
  childMdx___childSidebar___internal___description = 'childMdx___childSidebar___internal___description',
  childMdx___childSidebar___internal___fieldOwners = 'childMdx___childSidebar___internal___fieldOwners',
  childMdx___childSidebar___internal___ignoreType = 'childMdx___childSidebar___internal___ignoreType',
  childMdx___childSidebar___internal___mediaType = 'childMdx___childSidebar___internal___mediaType',
  childMdx___childSidebar___internal___owner = 'childMdx___childSidebar___internal___owner',
  childMdx___childSidebar___internal___type = 'childMdx___childSidebar___internal___type',
  childMdx___childSidebar___slug = 'childMdx___childSidebar___slug',
  childMdx___childSidebar___title = 'childMdx___childSidebar___title',
  childMdx___childMdxBlogPost___id = 'childMdx___childMdxBlogPost___id',
  childMdx___childMdxBlogPost___title = 'childMdx___childMdxBlogPost___title',
  childMdx___childMdxBlogPost___slug = 'childMdx___childMdxBlogPost___slug',
  childMdx___childMdxBlogPost___date = 'childMdx___childMdxBlogPost___date',
  childMdx___childMdxBlogPost___tags = 'childMdx___childMdxBlogPost___tags',
  childMdx___childMdxBlogPost___keywords = 'childMdx___childMdxBlogPost___keywords',
  childMdx___childMdxBlogPost___excerpt = 'childMdx___childMdxBlogPost___excerpt',
  childMdx___childMdxBlogPost___body = 'childMdx___childMdxBlogPost___body',
  childMdx___childMdxBlogPost___fields___commentsStatus = 'childMdx___childMdxBlogPost___fields___commentsStatus',
  childMdx___childMdxBlogPost___fields___description = 'childMdx___childMdxBlogPost___fields___description',
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
}

export enum DirectoryFieldsEnum {
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
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
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
}

export enum ImageSharpFieldsEnum {
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
  fields___commentsStatus = 'fields___commentsStatus',
  fields___description = 'fields___description',
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

export enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___status = 'frontmatter___status',
  frontmatter___license = 'frontmatter___license',
  frontmatter___sidebar = 'frontmatter___sidebar',
  frontmatter___path = 'frontmatter___path',
  frontmatter___date = 'frontmatter___date',
  frontmatter___project = 'frontmatter___project',
  frontmatter___comments = 'frontmatter___comments',
  frontmatter___projects = 'frontmatter___projects',
  frontmatter___tags = 'frontmatter___tags',
  frontmatter___description = 'frontmatter___description',
  frontmatter___featured_image___sourceInstanceName = 'frontmatter___featured_image___sourceInstanceName',
  frontmatter___featured_image___absolutePath = 'frontmatter___featured_image___absolutePath',
  frontmatter___featured_image___relativePath = 'frontmatter___featured_image___relativePath',
  frontmatter___featured_image___extension = 'frontmatter___featured_image___extension',
  frontmatter___featured_image___size = 'frontmatter___featured_image___size',
  frontmatter___featured_image___prettySize = 'frontmatter___featured_image___prettySize',
  frontmatter___featured_image___modifiedTime = 'frontmatter___featured_image___modifiedTime',
  frontmatter___featured_image___accessTime = 'frontmatter___featured_image___accessTime',
  frontmatter___featured_image___changeTime = 'frontmatter___featured_image___changeTime',
  frontmatter___featured_image___birthTime = 'frontmatter___featured_image___birthTime',
  frontmatter___featured_image___root = 'frontmatter___featured_image___root',
  frontmatter___featured_image___dir = 'frontmatter___featured_image___dir',
  frontmatter___featured_image___base = 'frontmatter___featured_image___base',
  frontmatter___featured_image___ext = 'frontmatter___featured_image___ext',
  frontmatter___featured_image___name = 'frontmatter___featured_image___name',
  frontmatter___featured_image___relativeDirectory = 'frontmatter___featured_image___relativeDirectory',
  frontmatter___featured_image___dev = 'frontmatter___featured_image___dev',
  frontmatter___featured_image___mode = 'frontmatter___featured_image___mode',
  frontmatter___featured_image___nlink = 'frontmatter___featured_image___nlink',
  frontmatter___featured_image___uid = 'frontmatter___featured_image___uid',
  frontmatter___featured_image___gid = 'frontmatter___featured_image___gid',
  frontmatter___featured_image___rdev = 'frontmatter___featured_image___rdev',
  frontmatter___featured_image___ino = 'frontmatter___featured_image___ino',
  frontmatter___featured_image___atimeMs = 'frontmatter___featured_image___atimeMs',
  frontmatter___featured_image___mtimeMs = 'frontmatter___featured_image___mtimeMs',
  frontmatter___featured_image___ctimeMs = 'frontmatter___featured_image___ctimeMs',
  frontmatter___featured_image___atime = 'frontmatter___featured_image___atime',
  frontmatter___featured_image___mtime = 'frontmatter___featured_image___mtime',
  frontmatter___featured_image___ctime = 'frontmatter___featured_image___ctime',
  frontmatter___featured_image___birthtime = 'frontmatter___featured_image___birthtime',
  frontmatter___featured_image___birthtimeMs = 'frontmatter___featured_image___birthtimeMs',
  frontmatter___featured_image___blksize = 'frontmatter___featured_image___blksize',
  frontmatter___featured_image___blocks = 'frontmatter___featured_image___blocks',
  frontmatter___featured_image___publicURL = 'frontmatter___featured_image___publicURL',
  frontmatter___featured_image___childImageSharp___id = 'frontmatter___featured_image___childImageSharp___id',
  frontmatter___featured_image___childImageSharp___children = 'frontmatter___featured_image___childImageSharp___children',
  frontmatter___featured_image___id = 'frontmatter___featured_image___id',
  frontmatter___featured_image___parent___id = 'frontmatter___featured_image___parent___id',
  frontmatter___featured_image___parent___children = 'frontmatter___featured_image___parent___children',
  frontmatter___featured_image___children = 'frontmatter___featured_image___children',
  frontmatter___featured_image___children___id = 'frontmatter___featured_image___children___id',
  frontmatter___featured_image___children___children = 'frontmatter___featured_image___children___children',
  frontmatter___featured_image___internal___content = 'frontmatter___featured_image___internal___content',
  frontmatter___featured_image___internal___contentDigest = 'frontmatter___featured_image___internal___contentDigest',
  frontmatter___featured_image___internal___description = 'frontmatter___featured_image___internal___description',
  frontmatter___featured_image___internal___fieldOwners = 'frontmatter___featured_image___internal___fieldOwners',
  frontmatter___featured_image___internal___ignoreType = 'frontmatter___featured_image___internal___ignoreType',
  frontmatter___featured_image___internal___mediaType = 'frontmatter___featured_image___internal___mediaType',
  frontmatter___featured_image___internal___owner = 'frontmatter___featured_image___internal___owner',
  frontmatter___featured_image___internal___type = 'frontmatter___featured_image___internal___type',
  frontmatter___featured_image___childMdx___rawBody = 'frontmatter___featured_image___childMdx___rawBody',
  frontmatter___featured_image___childMdx___fileAbsolutePath = 'frontmatter___featured_image___childMdx___fileAbsolutePath',
  frontmatter___featured_image___childMdx___body = 'frontmatter___featured_image___childMdx___body',
  frontmatter___featured_image___childMdx___excerpt = 'frontmatter___featured_image___childMdx___excerpt',
  frontmatter___featured_image___childMdx___headings = 'frontmatter___featured_image___childMdx___headings',
  frontmatter___featured_image___childMdx___html = 'frontmatter___featured_image___childMdx___html',
  frontmatter___featured_image___childMdx___mdxAST = 'frontmatter___featured_image___childMdx___mdxAST',
  frontmatter___featured_image___childMdx___tableOfContents = 'frontmatter___featured_image___childMdx___tableOfContents',
  frontmatter___featured_image___childMdx___timeToRead = 'frontmatter___featured_image___childMdx___timeToRead',
  frontmatter___featured_image___childMdx___id = 'frontmatter___featured_image___childMdx___id',
  frontmatter___featured_image___childMdx___children = 'frontmatter___featured_image___childMdx___children',
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
  childProject___id = 'childProject___id',
  childProject___parent___id = 'childProject___parent___id',
  childProject___parent___parent___id = 'childProject___parent___parent___id',
  childProject___parent___parent___children = 'childProject___parent___parent___children',
  childProject___parent___children = 'childProject___parent___children',
  childProject___parent___children___id = 'childProject___parent___children___id',
  childProject___parent___children___children = 'childProject___parent___children___children',
  childProject___parent___internal___content = 'childProject___parent___internal___content',
  childProject___parent___internal___contentDigest = 'childProject___parent___internal___contentDigest',
  childProject___parent___internal___description = 'childProject___parent___internal___description',
  childProject___parent___internal___fieldOwners = 'childProject___parent___internal___fieldOwners',
  childProject___parent___internal___ignoreType = 'childProject___parent___internal___ignoreType',
  childProject___parent___internal___mediaType = 'childProject___parent___internal___mediaType',
  childProject___parent___internal___owner = 'childProject___parent___internal___owner',
  childProject___parent___internal___type = 'childProject___parent___internal___type',
  childProject___children = 'childProject___children',
  childProject___children___id = 'childProject___children___id',
  childProject___children___parent___id = 'childProject___children___parent___id',
  childProject___children___parent___children = 'childProject___children___parent___children',
  childProject___children___children = 'childProject___children___children',
  childProject___children___children___id = 'childProject___children___children___id',
  childProject___children___children___children = 'childProject___children___children___children',
  childProject___children___internal___content = 'childProject___children___internal___content',
  childProject___children___internal___contentDigest = 'childProject___children___internal___contentDigest',
  childProject___children___internal___description = 'childProject___children___internal___description',
  childProject___children___internal___fieldOwners = 'childProject___children___internal___fieldOwners',
  childProject___children___internal___ignoreType = 'childProject___children___internal___ignoreType',
  childProject___children___internal___mediaType = 'childProject___children___internal___mediaType',
  childProject___children___internal___owner = 'childProject___children___internal___owner',
  childProject___children___internal___type = 'childProject___children___internal___type',
  childProject___internal___content = 'childProject___internal___content',
  childProject___internal___contentDigest = 'childProject___internal___contentDigest',
  childProject___internal___description = 'childProject___internal___description',
  childProject___internal___fieldOwners = 'childProject___internal___fieldOwners',
  childProject___internal___ignoreType = 'childProject___internal___ignoreType',
  childProject___internal___mediaType = 'childProject___internal___mediaType',
  childProject___internal___owner = 'childProject___internal___owner',
  childProject___internal___type = 'childProject___internal___type',
  childProject___projectId = 'childProject___projectId',
  childProject___slug = 'childProject___slug',
  childProject___title = 'childProject___title',
  childSidebar___id = 'childSidebar___id',
  childSidebar___parent___id = 'childSidebar___parent___id',
  childSidebar___parent___parent___id = 'childSidebar___parent___parent___id',
  childSidebar___parent___parent___children = 'childSidebar___parent___parent___children',
  childSidebar___parent___children = 'childSidebar___parent___children',
  childSidebar___parent___children___id = 'childSidebar___parent___children___id',
  childSidebar___parent___children___children = 'childSidebar___parent___children___children',
  childSidebar___parent___internal___content = 'childSidebar___parent___internal___content',
  childSidebar___parent___internal___contentDigest = 'childSidebar___parent___internal___contentDigest',
  childSidebar___parent___internal___description = 'childSidebar___parent___internal___description',
  childSidebar___parent___internal___fieldOwners = 'childSidebar___parent___internal___fieldOwners',
  childSidebar___parent___internal___ignoreType = 'childSidebar___parent___internal___ignoreType',
  childSidebar___parent___internal___mediaType = 'childSidebar___parent___internal___mediaType',
  childSidebar___parent___internal___owner = 'childSidebar___parent___internal___owner',
  childSidebar___parent___internal___type = 'childSidebar___parent___internal___type',
  childSidebar___children = 'childSidebar___children',
  childSidebar___children___id = 'childSidebar___children___id',
  childSidebar___children___parent___id = 'childSidebar___children___parent___id',
  childSidebar___children___parent___children = 'childSidebar___children___parent___children',
  childSidebar___children___children = 'childSidebar___children___children',
  childSidebar___children___children___id = 'childSidebar___children___children___id',
  childSidebar___children___children___children = 'childSidebar___children___children___children',
  childSidebar___children___internal___content = 'childSidebar___children___internal___content',
  childSidebar___children___internal___contentDigest = 'childSidebar___children___internal___contentDigest',
  childSidebar___children___internal___description = 'childSidebar___children___internal___description',
  childSidebar___children___internal___fieldOwners = 'childSidebar___children___internal___fieldOwners',
  childSidebar___children___internal___ignoreType = 'childSidebar___children___internal___ignoreType',
  childSidebar___children___internal___mediaType = 'childSidebar___children___internal___mediaType',
  childSidebar___children___internal___owner = 'childSidebar___children___internal___owner',
  childSidebar___children___internal___type = 'childSidebar___children___internal___type',
  childSidebar___internal___content = 'childSidebar___internal___content',
  childSidebar___internal___contentDigest = 'childSidebar___internal___contentDigest',
  childSidebar___internal___description = 'childSidebar___internal___description',
  childSidebar___internal___fieldOwners = 'childSidebar___internal___fieldOwners',
  childSidebar___internal___ignoreType = 'childSidebar___internal___ignoreType',
  childSidebar___internal___mediaType = 'childSidebar___internal___mediaType',
  childSidebar___internal___owner = 'childSidebar___internal___owner',
  childSidebar___internal___type = 'childSidebar___internal___type',
  childSidebar___slug = 'childSidebar___slug',
  childSidebar___title = 'childSidebar___title',
  childMdxBlogPost___id = 'childMdxBlogPost___id',
  childMdxBlogPost___title = 'childMdxBlogPost___title',
  childMdxBlogPost___slug = 'childMdxBlogPost___slug',
  childMdxBlogPost___date = 'childMdxBlogPost___date',
  childMdxBlogPost___tags = 'childMdxBlogPost___tags',
  childMdxBlogPost___keywords = 'childMdxBlogPost___keywords',
  childMdxBlogPost___excerpt = 'childMdxBlogPost___excerpt',
  childMdxBlogPost___body = 'childMdxBlogPost___body',
  childMdxBlogPost___fields___commentsStatus = 'childMdxBlogPost___fields___commentsStatus',
  childMdxBlogPost___fields___description = 'childMdxBlogPost___fields___description',
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

export enum PostCommentFieldsEnum {
  name = 'name',
  body = 'body',
  createdAt = 'createdAt',
  gravatarHash = 'gravatarHash',
  post___id = 'post___id',
  post___title = 'post___title',
  post___slug = 'post___slug',
  post___date = 'post___date',
  post___tags = 'post___tags',
  post___keywords = 'post___keywords',
  post___excerpt = 'post___excerpt',
  post___body = 'post___body',
  post___fields___commentsStatus = 'post___fields___commentsStatus',
  post___fields___description = 'post___fields___description',
  post___parent___id = 'post___parent___id',
  post___parent___parent___id = 'post___parent___parent___id',
  post___parent___parent___children = 'post___parent___parent___children',
  post___parent___children = 'post___parent___children',
  post___parent___children___id = 'post___parent___children___id',
  post___parent___children___children = 'post___parent___children___children',
  post___parent___internal___content = 'post___parent___internal___content',
  post___parent___internal___contentDigest = 'post___parent___internal___contentDigest',
  post___parent___internal___description = 'post___parent___internal___description',
  post___parent___internal___fieldOwners = 'post___parent___internal___fieldOwners',
  post___parent___internal___ignoreType = 'post___parent___internal___ignoreType',
  post___parent___internal___mediaType = 'post___parent___internal___mediaType',
  post___parent___internal___owner = 'post___parent___internal___owner',
  post___parent___internal___type = 'post___parent___internal___type',
  post___children = 'post___children',
  post___children___id = 'post___children___id',
  post___children___parent___id = 'post___children___parent___id',
  post___children___parent___children = 'post___children___parent___children',
  post___children___children = 'post___children___children',
  post___children___children___id = 'post___children___children___id',
  post___children___children___children = 'post___children___children___children',
  post___children___internal___content = 'post___children___internal___content',
  post___children___internal___contentDigest = 'post___children___internal___contentDigest',
  post___children___internal___description = 'post___children___internal___description',
  post___children___internal___fieldOwners = 'post___children___internal___fieldOwners',
  post___children___internal___ignoreType = 'post___children___internal___ignoreType',
  post___children___internal___mediaType = 'post___children___internal___mediaType',
  post___children___internal___owner = 'post___children___internal___owner',
  post___children___internal___type = 'post___children___internal___type',
  post___internal___content = 'post___internal___content',
  post___internal___contentDigest = 'post___internal___contentDigest',
  post___internal___description = 'post___internal___description',
  post___internal___fieldOwners = 'post___internal___fieldOwners',
  post___internal___ignoreType = 'post___internal___ignoreType',
  post___internal___mediaType = 'post___internal___mediaType',
  post___internal___owner = 'post___internal___owner',
  post___internal___type = 'post___internal___type',
  isSpam = 'isSpam',
  inReplyTo = 'inReplyTo',
  url = 'url',
  email = 'email',
  isTrashed = 'isTrashed',
  ip = 'ip',
  path = 'path',
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
}

export enum SidebarFieldsEnum {
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
  slug = 'slug',
  title = 'title',
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
  siteMetadata___addCommentUrl = 'siteMetadata___addCommentUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  buildTime = 'buildTime',
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
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___feeds = 'pluginOptions___feeds',
  pluginOptions___feeds___query = 'pluginOptions___feeds___query',
  pluginOptions___feeds___output = 'pluginOptions___feeds___output',
  pluginOptions___feeds___title = 'pluginOptions___feeds___title',
  pluginOptions___feeds___match = 'pluginOptions___feeds___match',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___extensions = 'pluginOptions___extensions',
  pluginOptions___defaultLayouts___pages = 'pluginOptions___defaultLayouts___pages',
  pluginOptions___gatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginOptions___gatsbyRemarkPlugins___options___maxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
  pluginOptions___gatsbyRemarkPlugins___options___showCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
  pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
  pluginOptions___gatsbyRemarkPlugins___options___pathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
  pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
  pluginOptions___gatsbyRemarkPlugins___options___backgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
  pluginOptions___gatsbyRemarkPlugins___options___withWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
  pluginOptions___gatsbyRemarkPlugins___options___tracedSVG = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
  pluginOptions___gatsbyRemarkPlugins___options___loading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
  pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
  pluginOptions___gatsbyRemarkPlugins___options___disableBgImage = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImage',
  pluginOptions___gatsbyRemarkPlugins___options___inlineCodeMarker = 'pluginOptions___gatsbyRemarkPlugins___options___inlineCodeMarker',
  pluginOptions___mdx = 'pluginOptions___mdx',
  pluginOptions___contentPath = 'pluginOptions___contentPath',
  pluginOptions___basePath = 'pluginOptions___basePath',
  pluginOptions___blogContentPath = 'pluginOptions___blogContentPath',
  pluginOptions___blogPostPath = 'pluginOptions___blogPostPath',
  pluginOptions___projectsContentPath = 'pluginOptions___projectsContentPath',
  pluginOptions___projectsPath = 'pluginOptions___projectsPath',
  pluginOptions___sidebarContentPath = 'pluginOptions___sidebarContentPath',
  pluginOptions___feedName = 'pluginOptions___feedName',
  pluginOptions___feedPath = 'pluginOptions___feedPath',
  pluginOptions___feedUrl = 'pluginOptions___feedUrl',
  pluginOptions___firebaseKeyPath = 'pluginOptions___firebaseKeyPath',
  pluginOptions___firebaseConfig___databaseURL = 'pluginOptions___firebaseConfig___databaseURL',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
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
  context___id = 'context___id',
  context___previousId = 'context___previousId',
  context___nextId = 'context___nextId',
  context___slug = 'context___slug',
  context___projectId = 'context___projectId',
  context___sidebarSlugs = 'context___sidebarSlugs',
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
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___feeds = 'pluginCreator___pluginOptions___feeds',
  pluginCreator___pluginOptions___feeds___query = 'pluginCreator___pluginOptions___feeds___query',
  pluginCreator___pluginOptions___feeds___output = 'pluginCreator___pluginOptions___feeds___output',
  pluginCreator___pluginOptions___feeds___title = 'pluginCreator___pluginOptions___feeds___title',
  pluginCreator___pluginOptions___feeds___match = 'pluginCreator___pluginOptions___feeds___match',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___extensions = 'pluginCreator___pluginOptions___extensions',
  pluginCreator___pluginOptions___defaultLayouts___pages = 'pluginCreator___pluginOptions___defaultLayouts___pages',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  pluginCreator___pluginOptions___mdx = 'pluginCreator___pluginOptions___mdx',
  pluginCreator___pluginOptions___contentPath = 'pluginCreator___pluginOptions___contentPath',
  pluginCreator___pluginOptions___basePath = 'pluginCreator___pluginOptions___basePath',
  pluginCreator___pluginOptions___blogContentPath = 'pluginCreator___pluginOptions___blogContentPath',
  pluginCreator___pluginOptions___blogPostPath = 'pluginCreator___pluginOptions___blogPostPath',
  pluginCreator___pluginOptions___projectsContentPath = 'pluginCreator___pluginOptions___projectsContentPath',
  pluginCreator___pluginOptions___projectsPath = 'pluginCreator___pluginOptions___projectsPath',
  pluginCreator___pluginOptions___sidebarContentPath = 'pluginCreator___pluginOptions___sidebarContentPath',
  pluginCreator___pluginOptions___feedName = 'pluginCreator___pluginOptions___feedName',
  pluginCreator___pluginOptions___feedPath = 'pluginCreator___pluginOptions___feedPath',
  pluginCreator___pluginOptions___feedUrl = 'pluginCreator___pluginOptions___feedUrl',
  pluginCreator___pluginOptions___firebaseKeyPath = 'pluginCreator___pluginOptions___firebaseKeyPath',
  pluginCreator___pluginOptions___firebaseConfig___databaseURL = 'pluginCreator___pluginOptions___firebaseConfig___databaseURL',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
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
    __typename?: MdxBlogPostInlineFragment['__typename'];

    excerpt: string;

    date: Date;

    title: string;

    slug: string;
  } & MdxBlogPostInlineFragment;

  export type MdxBlogPostInlineFragment = {
    __typename?: 'MdxBlogPost';

    id: string;

    body: string;

    parent: Maybe<Parent>;
  };

  export type Parent = MdxInlineFragment;

  export type MdxInlineFragment = {
    __typename?: 'Mdx';

    id: string;

    html: Maybe<string>;
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

    frontmatter: Maybe<Frontmatter>;
  };

  export type Fields = {
    __typename?: 'MdxFields';

    projectId: Maybe<string>;

    slug: Maybe<string>;
  };

  export type Frontmatter = {
    __typename?: 'MdxFrontmatter';

    sidebar: Maybe<(Maybe<string>)[]>;
  };
}

export namespace CommentFormQuery {
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

    addCommentUrl: Maybe<string>;
  };
}

export namespace LatestBlogPostsQuery {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    allBlogPost: AllBlogPost;

    commentCounts: CommentCounts;
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

    fields: Maybe<Fields>;
  };

  export type Fields = {
    __typename?: 'MdxBlogPostFields';

    commentsStatus: Maybe<string>;
  };

  export type CommentCounts = {
    __typename?: 'PostCommentConnection';

    group: Group[];
  };

  export type Group = {
    __typename?: 'PostCommentGroupConnection';

    totalCount: number;

    field: string;

    fieldValue: Maybe<string>;
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

    author: Maybe<string>;

    title: Maybe<string>;

    description: Maybe<string>;
  };
}

export namespace SiteSeoQuery {
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

    author: Maybe<string>;

    siteUrl: Maybe<string>;

    social: Maybe<(Maybe<Social>)[]>;
  };

  export type Social = {
    __typename?: 'SiteSiteMetadataSocial';

    name: Maybe<string>;
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

    blogPost: Maybe<BlogPost>;

    comments: Comments;

    previous: Maybe<Previous>;

    next: Maybe<Next>;
  };

  export type BlogPost = {
    __typename?: MdxBlogPostInlineFragment['__typename'];

    id: string;

    excerpt: string;

    body: string;

    slug: string;

    title: string;

    tags: (Maybe<string>)[];

    keywords: (Maybe<string>)[];

    date: Date;

    day: Date;

    month: Date;

    year: Date;
  } & MdxBlogPostInlineFragment;

  export type MdxBlogPostInlineFragment = {
    __typename?: 'MdxBlogPost';

    fields: Maybe<Fields>;

    parent: Maybe<Parent>;
  };

  export type Fields = {
    __typename?: 'MdxBlogPostFields';

    commentsStatus: Maybe<string>;
  };

  export type Parent = MdxInlineFragment;

  export type MdxInlineFragment = {
    __typename?: 'Mdx';

    frontmatter: Maybe<Frontmatter>;
  };

  export type Frontmatter = {
    __typename?: 'MdxFrontmatter';

    description: Maybe<string>;

    featured_image: Maybe<FeaturedImage>;
  };

  export type FeaturedImage = {
    __typename?: 'File';

    childImageSharp: Maybe<ChildImageSharp>;
  };

  export type ChildImageSharp = {
    __typename?: 'ImageSharp';

    fluid: Maybe<Fluid>;
  };

  export type Fluid = {
    __typename?: 'ImageSharpFluid';

    src: Maybe<string>;
  };

  export type Comments = {
    __typename?: 'PostCommentConnection';

    nodes: Nodes[];
  };

  export type Nodes = {
    __typename?: 'PostComment';

    id: string;

    name: string;

    body: string;

    gravatarHash: string;

    createdAt: Date;
  };

  export type Previous = {
    __typename?: _MdxBlogPostInlineFragment['__typename'];

    id: string;

    excerpt: string;

    slug: string;

    title: string;

    date: Date;
  } & _MdxBlogPostInlineFragment;

  export type _MdxBlogPostInlineFragment = {
    __typename?: 'MdxBlogPost';

    fields: Maybe<_Fields>;
  };

  export type _Fields = {
    __typename?: 'MdxBlogPostFields';

    description: Maybe<string>;
  };

  export type Next = {
    __typename?: __MdxBlogPostInlineFragment['__typename'];

    id: string;

    excerpt: string;

    slug: string;

    title: string;

    date: Date;
  } & __MdxBlogPostInlineFragment;

  export type __MdxBlogPostInlineFragment = {
    __typename?: 'MdxBlogPost';

    fields: Maybe<__Fields>;
  };

  export type __Fields = {
    __typename?: 'MdxBlogPostFields';

    description: Maybe<string>;
  };
}

export namespace ProjectPageQuery {
  export type Variables = {
    slug: string;
    projectId: string;
    sidebarSlugs?: Maybe<string[]>;
  };

  export type Query = {
    __typename?: 'Query';

    mdx: Maybe<Mdx>;

    relatedPosts: RelatedPosts;

    allSidebar: AllSidebar;
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

  export type AllSidebar = {
    __typename?: 'SidebarConnection';

    nodes: _Nodes[];
  };

  export type _Nodes = {
    __typename?: 'Sidebar';

    slug: Maybe<string>;

    title: Maybe<string>;

    parent: Maybe<Parent>;
  };

  export type Parent = MdxInlineFragment;

  export type MdxInlineFragment = {
    __typename?: 'Mdx';

    body: string;
  };
}
