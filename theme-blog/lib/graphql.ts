export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};










export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlogPost = {
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  slug: Scalars['String'];
  date: Scalars['Date'];
  tags: Array<Maybe<Scalars['String']>>;
  excerpt: Scalars['String'];
  image?: Maybe<File>;
  imageAlt?: Maybe<Scalars['String']>;
  imageCaptionText?: Maybe<Scalars['String']>;
  imageCaptionLink?: Maybe<Scalars['String']>;
  socialImage?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type BlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type BlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BlogPostEdge>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<BlogPostGroupConnection>;
};


export type BlogPostConnectionDistinctArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostConnectionMaxArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostConnectionMinArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostConnectionSumArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: BlogPostFieldsEnum;
};

export type BlogPostEdge = {
  next?: Maybe<BlogPost>;
  node: BlogPost;
  previous?: Maybe<BlogPost>;
};

export enum BlogPostFieldsEnum {
  id = 'id',
  title = 'title',
  body = 'body',
  slug = 'slug',
  date = 'date',
  tags = 'tags',
  excerpt = 'excerpt',
  image___sourceInstanceName = 'image___sourceInstanceName',
  image___absolutePath = 'image___absolutePath',
  image___relativePath = 'image___relativePath',
  image___extension = 'image___extension',
  image___size = 'image___size',
  image___prettySize = 'image___prettySize',
  image___modifiedTime = 'image___modifiedTime',
  image___accessTime = 'image___accessTime',
  image___changeTime = 'image___changeTime',
  image___birthTime = 'image___birthTime',
  image___root = 'image___root',
  image___dir = 'image___dir',
  image___base = 'image___base',
  image___ext = 'image___ext',
  image___name = 'image___name',
  image___relativeDirectory = 'image___relativeDirectory',
  image___dev = 'image___dev',
  image___mode = 'image___mode',
  image___nlink = 'image___nlink',
  image___uid = 'image___uid',
  image___gid = 'image___gid',
  image___rdev = 'image___rdev',
  image___ino = 'image___ino',
  image___atimeMs = 'image___atimeMs',
  image___mtimeMs = 'image___mtimeMs',
  image___ctimeMs = 'image___ctimeMs',
  image___atime = 'image___atime',
  image___mtime = 'image___mtime',
  image___ctime = 'image___ctime',
  image___birthtime = 'image___birthtime',
  image___birthtimeMs = 'image___birthtimeMs',
  image___blksize = 'image___blksize',
  image___blocks = 'image___blocks',
  image___publicURL = 'image___publicURL',
  image___childrenMdx = 'image___childrenMdx',
  image___childrenMdx___rawBody = 'image___childrenMdx___rawBody',
  image___childrenMdx___fileAbsolutePath = 'image___childrenMdx___fileAbsolutePath',
  image___childrenMdx___frontmatter___title = 'image___childrenMdx___frontmatter___title',
  image___childrenMdx___frontmatter___description = 'image___childrenMdx___frontmatter___description',
  image___childrenMdx___frontmatter___sidebar = 'image___childrenMdx___frontmatter___sidebar',
  image___childrenMdx___frontmatter___status = 'image___childrenMdx___frontmatter___status',
  image___childrenMdx___frontmatter___license = 'image___childrenMdx___frontmatter___license',
  image___childrenMdx___frontmatter___path = 'image___childrenMdx___frontmatter___path',
  image___childrenMdx___frontmatter___date = 'image___childrenMdx___frontmatter___date',
  image___childrenMdx___frontmatter___project = 'image___childrenMdx___frontmatter___project',
  image___childrenMdx___frontmatter___comments = 'image___childrenMdx___frontmatter___comments',
  image___childrenMdx___frontmatter___projects = 'image___childrenMdx___frontmatter___projects',
  image___childrenMdx___frontmatter___tags = 'image___childrenMdx___frontmatter___tags',
  image___childrenMdx___slug = 'image___childrenMdx___slug',
  image___childrenMdx___body = 'image___childrenMdx___body',
  image___childrenMdx___excerpt = 'image___childrenMdx___excerpt',
  image___childrenMdx___headings = 'image___childrenMdx___headings',
  image___childrenMdx___headings___value = 'image___childrenMdx___headings___value',
  image___childrenMdx___headings___depth = 'image___childrenMdx___headings___depth',
  image___childrenMdx___html = 'image___childrenMdx___html',
  image___childrenMdx___mdxAST = 'image___childrenMdx___mdxAST',
  image___childrenMdx___tableOfContents = 'image___childrenMdx___tableOfContents',
  image___childrenMdx___timeToRead = 'image___childrenMdx___timeToRead',
  image___childrenMdx___wordCount___paragraphs = 'image___childrenMdx___wordCount___paragraphs',
  image___childrenMdx___wordCount___sentences = 'image___childrenMdx___wordCount___sentences',
  image___childrenMdx___wordCount___words = 'image___childrenMdx___wordCount___words',
  image___childrenMdx___fields___description = 'image___childrenMdx___fields___description',
  image___childrenMdx___fields___commentsStatus = 'image___childrenMdx___fields___commentsStatus',
  image___childrenMdx___fields___slug = 'image___childrenMdx___fields___slug',
  image___childrenMdx___fields___projectId = 'image___childrenMdx___fields___projectId',
  image___childrenMdx___childrenMdxBlogPost = 'image___childrenMdx___childrenMdxBlogPost',
  image___childrenMdx___childrenMdxBlogPost___id = 'image___childrenMdx___childrenMdxBlogPost___id',
  image___childrenMdx___childrenMdxBlogPost___title = 'image___childrenMdx___childrenMdxBlogPost___title',
  image___childrenMdx___childrenMdxBlogPost___slug = 'image___childrenMdx___childrenMdxBlogPost___slug',
  image___childrenMdx___childrenMdxBlogPost___date = 'image___childrenMdx___childrenMdxBlogPost___date',
  image___childrenMdx___childrenMdxBlogPost___tags = 'image___childrenMdx___childrenMdxBlogPost___tags',
  image___childrenMdx___childrenMdxBlogPost___excerpt = 'image___childrenMdx___childrenMdxBlogPost___excerpt',
  image___childrenMdx___childrenMdxBlogPost___imageAlt = 'image___childrenMdx___childrenMdxBlogPost___imageAlt',
  image___childrenMdx___childrenMdxBlogPost___imageCaptionText = 'image___childrenMdx___childrenMdxBlogPost___imageCaptionText',
  image___childrenMdx___childrenMdxBlogPost___imageCaptionLink = 'image___childrenMdx___childrenMdxBlogPost___imageCaptionLink',
  image___childrenMdx___childrenMdxBlogPost___body = 'image___childrenMdx___childrenMdxBlogPost___body',
  image___childrenMdx___childrenMdxBlogPost___children = 'image___childrenMdx___childrenMdxBlogPost___children',
  image___childrenMdx___childMdxBlogPost___id = 'image___childrenMdx___childMdxBlogPost___id',
  image___childrenMdx___childMdxBlogPost___title = 'image___childrenMdx___childMdxBlogPost___title',
  image___childrenMdx___childMdxBlogPost___slug = 'image___childrenMdx___childMdxBlogPost___slug',
  image___childrenMdx___childMdxBlogPost___date = 'image___childrenMdx___childMdxBlogPost___date',
  image___childrenMdx___childMdxBlogPost___tags = 'image___childrenMdx___childMdxBlogPost___tags',
  image___childrenMdx___childMdxBlogPost___excerpt = 'image___childrenMdx___childMdxBlogPost___excerpt',
  image___childrenMdx___childMdxBlogPost___imageAlt = 'image___childrenMdx___childMdxBlogPost___imageAlt',
  image___childrenMdx___childMdxBlogPost___imageCaptionText = 'image___childrenMdx___childMdxBlogPost___imageCaptionText',
  image___childrenMdx___childMdxBlogPost___imageCaptionLink = 'image___childrenMdx___childMdxBlogPost___imageCaptionLink',
  image___childrenMdx___childMdxBlogPost___body = 'image___childrenMdx___childMdxBlogPost___body',
  image___childrenMdx___childMdxBlogPost___children = 'image___childrenMdx___childMdxBlogPost___children',
  image___childrenMdx___childrenSidebar = 'image___childrenMdx___childrenSidebar',
  image___childrenMdx___childrenSidebar___id = 'image___childrenMdx___childrenSidebar___id',
  image___childrenMdx___childrenSidebar___children = 'image___childrenMdx___childrenSidebar___children',
  image___childrenMdx___childrenSidebar___slug = 'image___childrenMdx___childrenSidebar___slug',
  image___childrenMdx___childrenSidebar___title = 'image___childrenMdx___childrenSidebar___title',
  image___childrenMdx___childSidebar___id = 'image___childrenMdx___childSidebar___id',
  image___childrenMdx___childSidebar___children = 'image___childrenMdx___childSidebar___children',
  image___childrenMdx___childSidebar___slug = 'image___childrenMdx___childSidebar___slug',
  image___childrenMdx___childSidebar___title = 'image___childrenMdx___childSidebar___title',
  image___childrenMdx___childrenProject = 'image___childrenMdx___childrenProject',
  image___childrenMdx___childrenProject___id = 'image___childrenMdx___childrenProject___id',
  image___childrenMdx___childrenProject___children = 'image___childrenMdx___childrenProject___children',
  image___childrenMdx___childrenProject___projectId = 'image___childrenMdx___childrenProject___projectId',
  image___childrenMdx___childrenProject___slug = 'image___childrenMdx___childrenProject___slug',
  image___childrenMdx___childrenProject___title = 'image___childrenMdx___childrenProject___title',
  image___childrenMdx___childProject___id = 'image___childrenMdx___childProject___id',
  image___childrenMdx___childProject___children = 'image___childrenMdx___childProject___children',
  image___childrenMdx___childProject___projectId = 'image___childrenMdx___childProject___projectId',
  image___childrenMdx___childProject___slug = 'image___childrenMdx___childProject___slug',
  image___childrenMdx___childProject___title = 'image___childrenMdx___childProject___title',
  image___childrenMdx___id = 'image___childrenMdx___id',
  image___childrenMdx___parent___id = 'image___childrenMdx___parent___id',
  image___childrenMdx___parent___children = 'image___childrenMdx___parent___children',
  image___childrenMdx___children = 'image___childrenMdx___children',
  image___childrenMdx___children___id = 'image___childrenMdx___children___id',
  image___childrenMdx___children___children = 'image___childrenMdx___children___children',
  image___childrenMdx___internal___content = 'image___childrenMdx___internal___content',
  image___childrenMdx___internal___contentDigest = 'image___childrenMdx___internal___contentDigest',
  image___childrenMdx___internal___description = 'image___childrenMdx___internal___description',
  image___childrenMdx___internal___fieldOwners = 'image___childrenMdx___internal___fieldOwners',
  image___childrenMdx___internal___ignoreType = 'image___childrenMdx___internal___ignoreType',
  image___childrenMdx___internal___mediaType = 'image___childrenMdx___internal___mediaType',
  image___childrenMdx___internal___owner = 'image___childrenMdx___internal___owner',
  image___childrenMdx___internal___type = 'image___childrenMdx___internal___type',
  image___childMdx___rawBody = 'image___childMdx___rawBody',
  image___childMdx___fileAbsolutePath = 'image___childMdx___fileAbsolutePath',
  image___childMdx___frontmatter___title = 'image___childMdx___frontmatter___title',
  image___childMdx___frontmatter___description = 'image___childMdx___frontmatter___description',
  image___childMdx___frontmatter___sidebar = 'image___childMdx___frontmatter___sidebar',
  image___childMdx___frontmatter___status = 'image___childMdx___frontmatter___status',
  image___childMdx___frontmatter___license = 'image___childMdx___frontmatter___license',
  image___childMdx___frontmatter___path = 'image___childMdx___frontmatter___path',
  image___childMdx___frontmatter___date = 'image___childMdx___frontmatter___date',
  image___childMdx___frontmatter___project = 'image___childMdx___frontmatter___project',
  image___childMdx___frontmatter___comments = 'image___childMdx___frontmatter___comments',
  image___childMdx___frontmatter___projects = 'image___childMdx___frontmatter___projects',
  image___childMdx___frontmatter___tags = 'image___childMdx___frontmatter___tags',
  image___childMdx___slug = 'image___childMdx___slug',
  image___childMdx___body = 'image___childMdx___body',
  image___childMdx___excerpt = 'image___childMdx___excerpt',
  image___childMdx___headings = 'image___childMdx___headings',
  image___childMdx___headings___value = 'image___childMdx___headings___value',
  image___childMdx___headings___depth = 'image___childMdx___headings___depth',
  image___childMdx___html = 'image___childMdx___html',
  image___childMdx___mdxAST = 'image___childMdx___mdxAST',
  image___childMdx___tableOfContents = 'image___childMdx___tableOfContents',
  image___childMdx___timeToRead = 'image___childMdx___timeToRead',
  image___childMdx___wordCount___paragraphs = 'image___childMdx___wordCount___paragraphs',
  image___childMdx___wordCount___sentences = 'image___childMdx___wordCount___sentences',
  image___childMdx___wordCount___words = 'image___childMdx___wordCount___words',
  image___childMdx___fields___description = 'image___childMdx___fields___description',
  image___childMdx___fields___commentsStatus = 'image___childMdx___fields___commentsStatus',
  image___childMdx___fields___slug = 'image___childMdx___fields___slug',
  image___childMdx___fields___projectId = 'image___childMdx___fields___projectId',
  image___childMdx___childrenMdxBlogPost = 'image___childMdx___childrenMdxBlogPost',
  image___childMdx___childrenMdxBlogPost___id = 'image___childMdx___childrenMdxBlogPost___id',
  image___childMdx___childrenMdxBlogPost___title = 'image___childMdx___childrenMdxBlogPost___title',
  image___childMdx___childrenMdxBlogPost___slug = 'image___childMdx___childrenMdxBlogPost___slug',
  image___childMdx___childrenMdxBlogPost___date = 'image___childMdx___childrenMdxBlogPost___date',
  image___childMdx___childrenMdxBlogPost___tags = 'image___childMdx___childrenMdxBlogPost___tags',
  image___childMdx___childrenMdxBlogPost___excerpt = 'image___childMdx___childrenMdxBlogPost___excerpt',
  image___childMdx___childrenMdxBlogPost___imageAlt = 'image___childMdx___childrenMdxBlogPost___imageAlt',
  image___childMdx___childrenMdxBlogPost___imageCaptionText = 'image___childMdx___childrenMdxBlogPost___imageCaptionText',
  image___childMdx___childrenMdxBlogPost___imageCaptionLink = 'image___childMdx___childrenMdxBlogPost___imageCaptionLink',
  image___childMdx___childrenMdxBlogPost___body = 'image___childMdx___childrenMdxBlogPost___body',
  image___childMdx___childrenMdxBlogPost___children = 'image___childMdx___childrenMdxBlogPost___children',
  image___childMdx___childMdxBlogPost___id = 'image___childMdx___childMdxBlogPost___id',
  image___childMdx___childMdxBlogPost___title = 'image___childMdx___childMdxBlogPost___title',
  image___childMdx___childMdxBlogPost___slug = 'image___childMdx___childMdxBlogPost___slug',
  image___childMdx___childMdxBlogPost___date = 'image___childMdx___childMdxBlogPost___date',
  image___childMdx___childMdxBlogPost___tags = 'image___childMdx___childMdxBlogPost___tags',
  image___childMdx___childMdxBlogPost___excerpt = 'image___childMdx___childMdxBlogPost___excerpt',
  image___childMdx___childMdxBlogPost___imageAlt = 'image___childMdx___childMdxBlogPost___imageAlt',
  image___childMdx___childMdxBlogPost___imageCaptionText = 'image___childMdx___childMdxBlogPost___imageCaptionText',
  image___childMdx___childMdxBlogPost___imageCaptionLink = 'image___childMdx___childMdxBlogPost___imageCaptionLink',
  image___childMdx___childMdxBlogPost___body = 'image___childMdx___childMdxBlogPost___body',
  image___childMdx___childMdxBlogPost___children = 'image___childMdx___childMdxBlogPost___children',
  image___childMdx___childrenSidebar = 'image___childMdx___childrenSidebar',
  image___childMdx___childrenSidebar___id = 'image___childMdx___childrenSidebar___id',
  image___childMdx___childrenSidebar___children = 'image___childMdx___childrenSidebar___children',
  image___childMdx___childrenSidebar___slug = 'image___childMdx___childrenSidebar___slug',
  image___childMdx___childrenSidebar___title = 'image___childMdx___childrenSidebar___title',
  image___childMdx___childSidebar___id = 'image___childMdx___childSidebar___id',
  image___childMdx___childSidebar___children = 'image___childMdx___childSidebar___children',
  image___childMdx___childSidebar___slug = 'image___childMdx___childSidebar___slug',
  image___childMdx___childSidebar___title = 'image___childMdx___childSidebar___title',
  image___childMdx___childrenProject = 'image___childMdx___childrenProject',
  image___childMdx___childrenProject___id = 'image___childMdx___childrenProject___id',
  image___childMdx___childrenProject___children = 'image___childMdx___childrenProject___children',
  image___childMdx___childrenProject___projectId = 'image___childMdx___childrenProject___projectId',
  image___childMdx___childrenProject___slug = 'image___childMdx___childrenProject___slug',
  image___childMdx___childrenProject___title = 'image___childMdx___childrenProject___title',
  image___childMdx___childProject___id = 'image___childMdx___childProject___id',
  image___childMdx___childProject___children = 'image___childMdx___childProject___children',
  image___childMdx___childProject___projectId = 'image___childMdx___childProject___projectId',
  image___childMdx___childProject___slug = 'image___childMdx___childProject___slug',
  image___childMdx___childProject___title = 'image___childMdx___childProject___title',
  image___childMdx___id = 'image___childMdx___id',
  image___childMdx___parent___id = 'image___childMdx___parent___id',
  image___childMdx___parent___children = 'image___childMdx___parent___children',
  image___childMdx___children = 'image___childMdx___children',
  image___childMdx___children___id = 'image___childMdx___children___id',
  image___childMdx___children___children = 'image___childMdx___children___children',
  image___childMdx___internal___content = 'image___childMdx___internal___content',
  image___childMdx___internal___contentDigest = 'image___childMdx___internal___contentDigest',
  image___childMdx___internal___description = 'image___childMdx___internal___description',
  image___childMdx___internal___fieldOwners = 'image___childMdx___internal___fieldOwners',
  image___childMdx___internal___ignoreType = 'image___childMdx___internal___ignoreType',
  image___childMdx___internal___mediaType = 'image___childMdx___internal___mediaType',
  image___childMdx___internal___owner = 'image___childMdx___internal___owner',
  image___childMdx___internal___type = 'image___childMdx___internal___type',
  image___childrenImageSharp = 'image___childrenImageSharp',
  image___childrenImageSharp___fixed___base64 = 'image___childrenImageSharp___fixed___base64',
  image___childrenImageSharp___fixed___tracedSVG = 'image___childrenImageSharp___fixed___tracedSVG',
  image___childrenImageSharp___fixed___aspectRatio = 'image___childrenImageSharp___fixed___aspectRatio',
  image___childrenImageSharp___fixed___width = 'image___childrenImageSharp___fixed___width',
  image___childrenImageSharp___fixed___height = 'image___childrenImageSharp___fixed___height',
  image___childrenImageSharp___fixed___src = 'image___childrenImageSharp___fixed___src',
  image___childrenImageSharp___fixed___srcSet = 'image___childrenImageSharp___fixed___srcSet',
  image___childrenImageSharp___fixed___srcWebp = 'image___childrenImageSharp___fixed___srcWebp',
  image___childrenImageSharp___fixed___srcSetWebp = 'image___childrenImageSharp___fixed___srcSetWebp',
  image___childrenImageSharp___fixed___originalName = 'image___childrenImageSharp___fixed___originalName',
  image___childrenImageSharp___fluid___base64 = 'image___childrenImageSharp___fluid___base64',
  image___childrenImageSharp___fluid___tracedSVG = 'image___childrenImageSharp___fluid___tracedSVG',
  image___childrenImageSharp___fluid___aspectRatio = 'image___childrenImageSharp___fluid___aspectRatio',
  image___childrenImageSharp___fluid___src = 'image___childrenImageSharp___fluid___src',
  image___childrenImageSharp___fluid___srcSet = 'image___childrenImageSharp___fluid___srcSet',
  image___childrenImageSharp___fluid___srcWebp = 'image___childrenImageSharp___fluid___srcWebp',
  image___childrenImageSharp___fluid___srcSetWebp = 'image___childrenImageSharp___fluid___srcSetWebp',
  image___childrenImageSharp___fluid___sizes = 'image___childrenImageSharp___fluid___sizes',
  image___childrenImageSharp___fluid___originalImg = 'image___childrenImageSharp___fluid___originalImg',
  image___childrenImageSharp___fluid___originalName = 'image___childrenImageSharp___fluid___originalName',
  image___childrenImageSharp___fluid___presentationWidth = 'image___childrenImageSharp___fluid___presentationWidth',
  image___childrenImageSharp___fluid___presentationHeight = 'image___childrenImageSharp___fluid___presentationHeight',
  image___childrenImageSharp___gatsbyImageData = 'image___childrenImageSharp___gatsbyImageData',
  image___childrenImageSharp___original___width = 'image___childrenImageSharp___original___width',
  image___childrenImageSharp___original___height = 'image___childrenImageSharp___original___height',
  image___childrenImageSharp___original___src = 'image___childrenImageSharp___original___src',
  image___childrenImageSharp___resize___src = 'image___childrenImageSharp___resize___src',
  image___childrenImageSharp___resize___tracedSVG = 'image___childrenImageSharp___resize___tracedSVG',
  image___childrenImageSharp___resize___width = 'image___childrenImageSharp___resize___width',
  image___childrenImageSharp___resize___height = 'image___childrenImageSharp___resize___height',
  image___childrenImageSharp___resize___aspectRatio = 'image___childrenImageSharp___resize___aspectRatio',
  image___childrenImageSharp___resize___originalName = 'image___childrenImageSharp___resize___originalName',
  image___childrenImageSharp___id = 'image___childrenImageSharp___id',
  image___childrenImageSharp___parent___id = 'image___childrenImageSharp___parent___id',
  image___childrenImageSharp___parent___children = 'image___childrenImageSharp___parent___children',
  image___childrenImageSharp___children = 'image___childrenImageSharp___children',
  image___childrenImageSharp___children___id = 'image___childrenImageSharp___children___id',
  image___childrenImageSharp___children___children = 'image___childrenImageSharp___children___children',
  image___childrenImageSharp___internal___content = 'image___childrenImageSharp___internal___content',
  image___childrenImageSharp___internal___contentDigest = 'image___childrenImageSharp___internal___contentDigest',
  image___childrenImageSharp___internal___description = 'image___childrenImageSharp___internal___description',
  image___childrenImageSharp___internal___fieldOwners = 'image___childrenImageSharp___internal___fieldOwners',
  image___childrenImageSharp___internal___ignoreType = 'image___childrenImageSharp___internal___ignoreType',
  image___childrenImageSharp___internal___mediaType = 'image___childrenImageSharp___internal___mediaType',
  image___childrenImageSharp___internal___owner = 'image___childrenImageSharp___internal___owner',
  image___childrenImageSharp___internal___type = 'image___childrenImageSharp___internal___type',
  image___childImageSharp___fixed___base64 = 'image___childImageSharp___fixed___base64',
  image___childImageSharp___fixed___tracedSVG = 'image___childImageSharp___fixed___tracedSVG',
  image___childImageSharp___fixed___aspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  image___childImageSharp___fixed___width = 'image___childImageSharp___fixed___width',
  image___childImageSharp___fixed___height = 'image___childImageSharp___fixed___height',
  image___childImageSharp___fixed___src = 'image___childImageSharp___fixed___src',
  image___childImageSharp___fixed___srcSet = 'image___childImageSharp___fixed___srcSet',
  image___childImageSharp___fixed___srcWebp = 'image___childImageSharp___fixed___srcWebp',
  image___childImageSharp___fixed___srcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  image___childImageSharp___fixed___originalName = 'image___childImageSharp___fixed___originalName',
  image___childImageSharp___fluid___base64 = 'image___childImageSharp___fluid___base64',
  image___childImageSharp___fluid___tracedSVG = 'image___childImageSharp___fluid___tracedSVG',
  image___childImageSharp___fluid___aspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  image___childImageSharp___fluid___src = 'image___childImageSharp___fluid___src',
  image___childImageSharp___fluid___srcSet = 'image___childImageSharp___fluid___srcSet',
  image___childImageSharp___fluid___srcWebp = 'image___childImageSharp___fluid___srcWebp',
  image___childImageSharp___fluid___srcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  image___childImageSharp___fluid___sizes = 'image___childImageSharp___fluid___sizes',
  image___childImageSharp___fluid___originalImg = 'image___childImageSharp___fluid___originalImg',
  image___childImageSharp___fluid___originalName = 'image___childImageSharp___fluid___originalName',
  image___childImageSharp___fluid___presentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  image___childImageSharp___fluid___presentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  image___childImageSharp___gatsbyImageData = 'image___childImageSharp___gatsbyImageData',
  image___childImageSharp___original___width = 'image___childImageSharp___original___width',
  image___childImageSharp___original___height = 'image___childImageSharp___original___height',
  image___childImageSharp___original___src = 'image___childImageSharp___original___src',
  image___childImageSharp___resize___src = 'image___childImageSharp___resize___src',
  image___childImageSharp___resize___tracedSVG = 'image___childImageSharp___resize___tracedSVG',
  image___childImageSharp___resize___width = 'image___childImageSharp___resize___width',
  image___childImageSharp___resize___height = 'image___childImageSharp___resize___height',
  image___childImageSharp___resize___aspectRatio = 'image___childImageSharp___resize___aspectRatio',
  image___childImageSharp___resize___originalName = 'image___childImageSharp___resize___originalName',
  image___childImageSharp___id = 'image___childImageSharp___id',
  image___childImageSharp___parent___id = 'image___childImageSharp___parent___id',
  image___childImageSharp___parent___children = 'image___childImageSharp___parent___children',
  image___childImageSharp___children = 'image___childImageSharp___children',
  image___childImageSharp___children___id = 'image___childImageSharp___children___id',
  image___childImageSharp___children___children = 'image___childImageSharp___children___children',
  image___childImageSharp___internal___content = 'image___childImageSharp___internal___content',
  image___childImageSharp___internal___contentDigest = 'image___childImageSharp___internal___contentDigest',
  image___childImageSharp___internal___description = 'image___childImageSharp___internal___description',
  image___childImageSharp___internal___fieldOwners = 'image___childImageSharp___internal___fieldOwners',
  image___childImageSharp___internal___ignoreType = 'image___childImageSharp___internal___ignoreType',
  image___childImageSharp___internal___mediaType = 'image___childImageSharp___internal___mediaType',
  image___childImageSharp___internal___owner = 'image___childImageSharp___internal___owner',
  image___childImageSharp___internal___type = 'image___childImageSharp___internal___type',
  image___id = 'image___id',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  imageAlt = 'imageAlt',
  imageCaptionText = 'imageCaptionText',
  imageCaptionLink = 'imageCaptionLink',
  socialImage___sourceInstanceName = 'socialImage___sourceInstanceName',
  socialImage___absolutePath = 'socialImage___absolutePath',
  socialImage___relativePath = 'socialImage___relativePath',
  socialImage___extension = 'socialImage___extension',
  socialImage___size = 'socialImage___size',
  socialImage___prettySize = 'socialImage___prettySize',
  socialImage___modifiedTime = 'socialImage___modifiedTime',
  socialImage___accessTime = 'socialImage___accessTime',
  socialImage___changeTime = 'socialImage___changeTime',
  socialImage___birthTime = 'socialImage___birthTime',
  socialImage___root = 'socialImage___root',
  socialImage___dir = 'socialImage___dir',
  socialImage___base = 'socialImage___base',
  socialImage___ext = 'socialImage___ext',
  socialImage___name = 'socialImage___name',
  socialImage___relativeDirectory = 'socialImage___relativeDirectory',
  socialImage___dev = 'socialImage___dev',
  socialImage___mode = 'socialImage___mode',
  socialImage___nlink = 'socialImage___nlink',
  socialImage___uid = 'socialImage___uid',
  socialImage___gid = 'socialImage___gid',
  socialImage___rdev = 'socialImage___rdev',
  socialImage___ino = 'socialImage___ino',
  socialImage___atimeMs = 'socialImage___atimeMs',
  socialImage___mtimeMs = 'socialImage___mtimeMs',
  socialImage___ctimeMs = 'socialImage___ctimeMs',
  socialImage___atime = 'socialImage___atime',
  socialImage___mtime = 'socialImage___mtime',
  socialImage___ctime = 'socialImage___ctime',
  socialImage___birthtime = 'socialImage___birthtime',
  socialImage___birthtimeMs = 'socialImage___birthtimeMs',
  socialImage___blksize = 'socialImage___blksize',
  socialImage___blocks = 'socialImage___blocks',
  socialImage___publicURL = 'socialImage___publicURL',
  socialImage___childrenMdx = 'socialImage___childrenMdx',
  socialImage___childrenMdx___rawBody = 'socialImage___childrenMdx___rawBody',
  socialImage___childrenMdx___fileAbsolutePath = 'socialImage___childrenMdx___fileAbsolutePath',
  socialImage___childrenMdx___frontmatter___title = 'socialImage___childrenMdx___frontmatter___title',
  socialImage___childrenMdx___frontmatter___description = 'socialImage___childrenMdx___frontmatter___description',
  socialImage___childrenMdx___frontmatter___sidebar = 'socialImage___childrenMdx___frontmatter___sidebar',
  socialImage___childrenMdx___frontmatter___status = 'socialImage___childrenMdx___frontmatter___status',
  socialImage___childrenMdx___frontmatter___license = 'socialImage___childrenMdx___frontmatter___license',
  socialImage___childrenMdx___frontmatter___path = 'socialImage___childrenMdx___frontmatter___path',
  socialImage___childrenMdx___frontmatter___date = 'socialImage___childrenMdx___frontmatter___date',
  socialImage___childrenMdx___frontmatter___project = 'socialImage___childrenMdx___frontmatter___project',
  socialImage___childrenMdx___frontmatter___comments = 'socialImage___childrenMdx___frontmatter___comments',
  socialImage___childrenMdx___frontmatter___projects = 'socialImage___childrenMdx___frontmatter___projects',
  socialImage___childrenMdx___frontmatter___tags = 'socialImage___childrenMdx___frontmatter___tags',
  socialImage___childrenMdx___slug = 'socialImage___childrenMdx___slug',
  socialImage___childrenMdx___body = 'socialImage___childrenMdx___body',
  socialImage___childrenMdx___excerpt = 'socialImage___childrenMdx___excerpt',
  socialImage___childrenMdx___headings = 'socialImage___childrenMdx___headings',
  socialImage___childrenMdx___headings___value = 'socialImage___childrenMdx___headings___value',
  socialImage___childrenMdx___headings___depth = 'socialImage___childrenMdx___headings___depth',
  socialImage___childrenMdx___html = 'socialImage___childrenMdx___html',
  socialImage___childrenMdx___mdxAST = 'socialImage___childrenMdx___mdxAST',
  socialImage___childrenMdx___tableOfContents = 'socialImage___childrenMdx___tableOfContents',
  socialImage___childrenMdx___timeToRead = 'socialImage___childrenMdx___timeToRead',
  socialImage___childrenMdx___wordCount___paragraphs = 'socialImage___childrenMdx___wordCount___paragraphs',
  socialImage___childrenMdx___wordCount___sentences = 'socialImage___childrenMdx___wordCount___sentences',
  socialImage___childrenMdx___wordCount___words = 'socialImage___childrenMdx___wordCount___words',
  socialImage___childrenMdx___fields___description = 'socialImage___childrenMdx___fields___description',
  socialImage___childrenMdx___fields___commentsStatus = 'socialImage___childrenMdx___fields___commentsStatus',
  socialImage___childrenMdx___fields___slug = 'socialImage___childrenMdx___fields___slug',
  socialImage___childrenMdx___fields___projectId = 'socialImage___childrenMdx___fields___projectId',
  socialImage___childrenMdx___childrenMdxBlogPost = 'socialImage___childrenMdx___childrenMdxBlogPost',
  socialImage___childrenMdx___childrenMdxBlogPost___id = 'socialImage___childrenMdx___childrenMdxBlogPost___id',
  socialImage___childrenMdx___childrenMdxBlogPost___title = 'socialImage___childrenMdx___childrenMdxBlogPost___title',
  socialImage___childrenMdx___childrenMdxBlogPost___slug = 'socialImage___childrenMdx___childrenMdxBlogPost___slug',
  socialImage___childrenMdx___childrenMdxBlogPost___date = 'socialImage___childrenMdx___childrenMdxBlogPost___date',
  socialImage___childrenMdx___childrenMdxBlogPost___tags = 'socialImage___childrenMdx___childrenMdxBlogPost___tags',
  socialImage___childrenMdx___childrenMdxBlogPost___excerpt = 'socialImage___childrenMdx___childrenMdxBlogPost___excerpt',
  socialImage___childrenMdx___childrenMdxBlogPost___imageAlt = 'socialImage___childrenMdx___childrenMdxBlogPost___imageAlt',
  socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionText = 'socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionText',
  socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionLink = 'socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionLink',
  socialImage___childrenMdx___childrenMdxBlogPost___body = 'socialImage___childrenMdx___childrenMdxBlogPost___body',
  socialImage___childrenMdx___childrenMdxBlogPost___children = 'socialImage___childrenMdx___childrenMdxBlogPost___children',
  socialImage___childrenMdx___childMdxBlogPost___id = 'socialImage___childrenMdx___childMdxBlogPost___id',
  socialImage___childrenMdx___childMdxBlogPost___title = 'socialImage___childrenMdx___childMdxBlogPost___title',
  socialImage___childrenMdx___childMdxBlogPost___slug = 'socialImage___childrenMdx___childMdxBlogPost___slug',
  socialImage___childrenMdx___childMdxBlogPost___date = 'socialImage___childrenMdx___childMdxBlogPost___date',
  socialImage___childrenMdx___childMdxBlogPost___tags = 'socialImage___childrenMdx___childMdxBlogPost___tags',
  socialImage___childrenMdx___childMdxBlogPost___excerpt = 'socialImage___childrenMdx___childMdxBlogPost___excerpt',
  socialImage___childrenMdx___childMdxBlogPost___imageAlt = 'socialImage___childrenMdx___childMdxBlogPost___imageAlt',
  socialImage___childrenMdx___childMdxBlogPost___imageCaptionText = 'socialImage___childrenMdx___childMdxBlogPost___imageCaptionText',
  socialImage___childrenMdx___childMdxBlogPost___imageCaptionLink = 'socialImage___childrenMdx___childMdxBlogPost___imageCaptionLink',
  socialImage___childrenMdx___childMdxBlogPost___body = 'socialImage___childrenMdx___childMdxBlogPost___body',
  socialImage___childrenMdx___childMdxBlogPost___children = 'socialImage___childrenMdx___childMdxBlogPost___children',
  socialImage___childrenMdx___childrenSidebar = 'socialImage___childrenMdx___childrenSidebar',
  socialImage___childrenMdx___childrenSidebar___id = 'socialImage___childrenMdx___childrenSidebar___id',
  socialImage___childrenMdx___childrenSidebar___children = 'socialImage___childrenMdx___childrenSidebar___children',
  socialImage___childrenMdx___childrenSidebar___slug = 'socialImage___childrenMdx___childrenSidebar___slug',
  socialImage___childrenMdx___childrenSidebar___title = 'socialImage___childrenMdx___childrenSidebar___title',
  socialImage___childrenMdx___childSidebar___id = 'socialImage___childrenMdx___childSidebar___id',
  socialImage___childrenMdx___childSidebar___children = 'socialImage___childrenMdx___childSidebar___children',
  socialImage___childrenMdx___childSidebar___slug = 'socialImage___childrenMdx___childSidebar___slug',
  socialImage___childrenMdx___childSidebar___title = 'socialImage___childrenMdx___childSidebar___title',
  socialImage___childrenMdx___childrenProject = 'socialImage___childrenMdx___childrenProject',
  socialImage___childrenMdx___childrenProject___id = 'socialImage___childrenMdx___childrenProject___id',
  socialImage___childrenMdx___childrenProject___children = 'socialImage___childrenMdx___childrenProject___children',
  socialImage___childrenMdx___childrenProject___projectId = 'socialImage___childrenMdx___childrenProject___projectId',
  socialImage___childrenMdx___childrenProject___slug = 'socialImage___childrenMdx___childrenProject___slug',
  socialImage___childrenMdx___childrenProject___title = 'socialImage___childrenMdx___childrenProject___title',
  socialImage___childrenMdx___childProject___id = 'socialImage___childrenMdx___childProject___id',
  socialImage___childrenMdx___childProject___children = 'socialImage___childrenMdx___childProject___children',
  socialImage___childrenMdx___childProject___projectId = 'socialImage___childrenMdx___childProject___projectId',
  socialImage___childrenMdx___childProject___slug = 'socialImage___childrenMdx___childProject___slug',
  socialImage___childrenMdx___childProject___title = 'socialImage___childrenMdx___childProject___title',
  socialImage___childrenMdx___id = 'socialImage___childrenMdx___id',
  socialImage___childrenMdx___parent___id = 'socialImage___childrenMdx___parent___id',
  socialImage___childrenMdx___parent___children = 'socialImage___childrenMdx___parent___children',
  socialImage___childrenMdx___children = 'socialImage___childrenMdx___children',
  socialImage___childrenMdx___children___id = 'socialImage___childrenMdx___children___id',
  socialImage___childrenMdx___children___children = 'socialImage___childrenMdx___children___children',
  socialImage___childrenMdx___internal___content = 'socialImage___childrenMdx___internal___content',
  socialImage___childrenMdx___internal___contentDigest = 'socialImage___childrenMdx___internal___contentDigest',
  socialImage___childrenMdx___internal___description = 'socialImage___childrenMdx___internal___description',
  socialImage___childrenMdx___internal___fieldOwners = 'socialImage___childrenMdx___internal___fieldOwners',
  socialImage___childrenMdx___internal___ignoreType = 'socialImage___childrenMdx___internal___ignoreType',
  socialImage___childrenMdx___internal___mediaType = 'socialImage___childrenMdx___internal___mediaType',
  socialImage___childrenMdx___internal___owner = 'socialImage___childrenMdx___internal___owner',
  socialImage___childrenMdx___internal___type = 'socialImage___childrenMdx___internal___type',
  socialImage___childMdx___rawBody = 'socialImage___childMdx___rawBody',
  socialImage___childMdx___fileAbsolutePath = 'socialImage___childMdx___fileAbsolutePath',
  socialImage___childMdx___frontmatter___title = 'socialImage___childMdx___frontmatter___title',
  socialImage___childMdx___frontmatter___description = 'socialImage___childMdx___frontmatter___description',
  socialImage___childMdx___frontmatter___sidebar = 'socialImage___childMdx___frontmatter___sidebar',
  socialImage___childMdx___frontmatter___status = 'socialImage___childMdx___frontmatter___status',
  socialImage___childMdx___frontmatter___license = 'socialImage___childMdx___frontmatter___license',
  socialImage___childMdx___frontmatter___path = 'socialImage___childMdx___frontmatter___path',
  socialImage___childMdx___frontmatter___date = 'socialImage___childMdx___frontmatter___date',
  socialImage___childMdx___frontmatter___project = 'socialImage___childMdx___frontmatter___project',
  socialImage___childMdx___frontmatter___comments = 'socialImage___childMdx___frontmatter___comments',
  socialImage___childMdx___frontmatter___projects = 'socialImage___childMdx___frontmatter___projects',
  socialImage___childMdx___frontmatter___tags = 'socialImage___childMdx___frontmatter___tags',
  socialImage___childMdx___slug = 'socialImage___childMdx___slug',
  socialImage___childMdx___body = 'socialImage___childMdx___body',
  socialImage___childMdx___excerpt = 'socialImage___childMdx___excerpt',
  socialImage___childMdx___headings = 'socialImage___childMdx___headings',
  socialImage___childMdx___headings___value = 'socialImage___childMdx___headings___value',
  socialImage___childMdx___headings___depth = 'socialImage___childMdx___headings___depth',
  socialImage___childMdx___html = 'socialImage___childMdx___html',
  socialImage___childMdx___mdxAST = 'socialImage___childMdx___mdxAST',
  socialImage___childMdx___tableOfContents = 'socialImage___childMdx___tableOfContents',
  socialImage___childMdx___timeToRead = 'socialImage___childMdx___timeToRead',
  socialImage___childMdx___wordCount___paragraphs = 'socialImage___childMdx___wordCount___paragraphs',
  socialImage___childMdx___wordCount___sentences = 'socialImage___childMdx___wordCount___sentences',
  socialImage___childMdx___wordCount___words = 'socialImage___childMdx___wordCount___words',
  socialImage___childMdx___fields___description = 'socialImage___childMdx___fields___description',
  socialImage___childMdx___fields___commentsStatus = 'socialImage___childMdx___fields___commentsStatus',
  socialImage___childMdx___fields___slug = 'socialImage___childMdx___fields___slug',
  socialImage___childMdx___fields___projectId = 'socialImage___childMdx___fields___projectId',
  socialImage___childMdx___childrenMdxBlogPost = 'socialImage___childMdx___childrenMdxBlogPost',
  socialImage___childMdx___childrenMdxBlogPost___id = 'socialImage___childMdx___childrenMdxBlogPost___id',
  socialImage___childMdx___childrenMdxBlogPost___title = 'socialImage___childMdx___childrenMdxBlogPost___title',
  socialImage___childMdx___childrenMdxBlogPost___slug = 'socialImage___childMdx___childrenMdxBlogPost___slug',
  socialImage___childMdx___childrenMdxBlogPost___date = 'socialImage___childMdx___childrenMdxBlogPost___date',
  socialImage___childMdx___childrenMdxBlogPost___tags = 'socialImage___childMdx___childrenMdxBlogPost___tags',
  socialImage___childMdx___childrenMdxBlogPost___excerpt = 'socialImage___childMdx___childrenMdxBlogPost___excerpt',
  socialImage___childMdx___childrenMdxBlogPost___imageAlt = 'socialImage___childMdx___childrenMdxBlogPost___imageAlt',
  socialImage___childMdx___childrenMdxBlogPost___imageCaptionText = 'socialImage___childMdx___childrenMdxBlogPost___imageCaptionText',
  socialImage___childMdx___childrenMdxBlogPost___imageCaptionLink = 'socialImage___childMdx___childrenMdxBlogPost___imageCaptionLink',
  socialImage___childMdx___childrenMdxBlogPost___body = 'socialImage___childMdx___childrenMdxBlogPost___body',
  socialImage___childMdx___childrenMdxBlogPost___children = 'socialImage___childMdx___childrenMdxBlogPost___children',
  socialImage___childMdx___childMdxBlogPost___id = 'socialImage___childMdx___childMdxBlogPost___id',
  socialImage___childMdx___childMdxBlogPost___title = 'socialImage___childMdx___childMdxBlogPost___title',
  socialImage___childMdx___childMdxBlogPost___slug = 'socialImage___childMdx___childMdxBlogPost___slug',
  socialImage___childMdx___childMdxBlogPost___date = 'socialImage___childMdx___childMdxBlogPost___date',
  socialImage___childMdx___childMdxBlogPost___tags = 'socialImage___childMdx___childMdxBlogPost___tags',
  socialImage___childMdx___childMdxBlogPost___excerpt = 'socialImage___childMdx___childMdxBlogPost___excerpt',
  socialImage___childMdx___childMdxBlogPost___imageAlt = 'socialImage___childMdx___childMdxBlogPost___imageAlt',
  socialImage___childMdx___childMdxBlogPost___imageCaptionText = 'socialImage___childMdx___childMdxBlogPost___imageCaptionText',
  socialImage___childMdx___childMdxBlogPost___imageCaptionLink = 'socialImage___childMdx___childMdxBlogPost___imageCaptionLink',
  socialImage___childMdx___childMdxBlogPost___body = 'socialImage___childMdx___childMdxBlogPost___body',
  socialImage___childMdx___childMdxBlogPost___children = 'socialImage___childMdx___childMdxBlogPost___children',
  socialImage___childMdx___childrenSidebar = 'socialImage___childMdx___childrenSidebar',
  socialImage___childMdx___childrenSidebar___id = 'socialImage___childMdx___childrenSidebar___id',
  socialImage___childMdx___childrenSidebar___children = 'socialImage___childMdx___childrenSidebar___children',
  socialImage___childMdx___childrenSidebar___slug = 'socialImage___childMdx___childrenSidebar___slug',
  socialImage___childMdx___childrenSidebar___title = 'socialImage___childMdx___childrenSidebar___title',
  socialImage___childMdx___childSidebar___id = 'socialImage___childMdx___childSidebar___id',
  socialImage___childMdx___childSidebar___children = 'socialImage___childMdx___childSidebar___children',
  socialImage___childMdx___childSidebar___slug = 'socialImage___childMdx___childSidebar___slug',
  socialImage___childMdx___childSidebar___title = 'socialImage___childMdx___childSidebar___title',
  socialImage___childMdx___childrenProject = 'socialImage___childMdx___childrenProject',
  socialImage___childMdx___childrenProject___id = 'socialImage___childMdx___childrenProject___id',
  socialImage___childMdx___childrenProject___children = 'socialImage___childMdx___childrenProject___children',
  socialImage___childMdx___childrenProject___projectId = 'socialImage___childMdx___childrenProject___projectId',
  socialImage___childMdx___childrenProject___slug = 'socialImage___childMdx___childrenProject___slug',
  socialImage___childMdx___childrenProject___title = 'socialImage___childMdx___childrenProject___title',
  socialImage___childMdx___childProject___id = 'socialImage___childMdx___childProject___id',
  socialImage___childMdx___childProject___children = 'socialImage___childMdx___childProject___children',
  socialImage___childMdx___childProject___projectId = 'socialImage___childMdx___childProject___projectId',
  socialImage___childMdx___childProject___slug = 'socialImage___childMdx___childProject___slug',
  socialImage___childMdx___childProject___title = 'socialImage___childMdx___childProject___title',
  socialImage___childMdx___id = 'socialImage___childMdx___id',
  socialImage___childMdx___parent___id = 'socialImage___childMdx___parent___id',
  socialImage___childMdx___parent___children = 'socialImage___childMdx___parent___children',
  socialImage___childMdx___children = 'socialImage___childMdx___children',
  socialImage___childMdx___children___id = 'socialImage___childMdx___children___id',
  socialImage___childMdx___children___children = 'socialImage___childMdx___children___children',
  socialImage___childMdx___internal___content = 'socialImage___childMdx___internal___content',
  socialImage___childMdx___internal___contentDigest = 'socialImage___childMdx___internal___contentDigest',
  socialImage___childMdx___internal___description = 'socialImage___childMdx___internal___description',
  socialImage___childMdx___internal___fieldOwners = 'socialImage___childMdx___internal___fieldOwners',
  socialImage___childMdx___internal___ignoreType = 'socialImage___childMdx___internal___ignoreType',
  socialImage___childMdx___internal___mediaType = 'socialImage___childMdx___internal___mediaType',
  socialImage___childMdx___internal___owner = 'socialImage___childMdx___internal___owner',
  socialImage___childMdx___internal___type = 'socialImage___childMdx___internal___type',
  socialImage___childrenImageSharp = 'socialImage___childrenImageSharp',
  socialImage___childrenImageSharp___fixed___base64 = 'socialImage___childrenImageSharp___fixed___base64',
  socialImage___childrenImageSharp___fixed___tracedSVG = 'socialImage___childrenImageSharp___fixed___tracedSVG',
  socialImage___childrenImageSharp___fixed___aspectRatio = 'socialImage___childrenImageSharp___fixed___aspectRatio',
  socialImage___childrenImageSharp___fixed___width = 'socialImage___childrenImageSharp___fixed___width',
  socialImage___childrenImageSharp___fixed___height = 'socialImage___childrenImageSharp___fixed___height',
  socialImage___childrenImageSharp___fixed___src = 'socialImage___childrenImageSharp___fixed___src',
  socialImage___childrenImageSharp___fixed___srcSet = 'socialImage___childrenImageSharp___fixed___srcSet',
  socialImage___childrenImageSharp___fixed___srcWebp = 'socialImage___childrenImageSharp___fixed___srcWebp',
  socialImage___childrenImageSharp___fixed___srcSetWebp = 'socialImage___childrenImageSharp___fixed___srcSetWebp',
  socialImage___childrenImageSharp___fixed___originalName = 'socialImage___childrenImageSharp___fixed___originalName',
  socialImage___childrenImageSharp___fluid___base64 = 'socialImage___childrenImageSharp___fluid___base64',
  socialImage___childrenImageSharp___fluid___tracedSVG = 'socialImage___childrenImageSharp___fluid___tracedSVG',
  socialImage___childrenImageSharp___fluid___aspectRatio = 'socialImage___childrenImageSharp___fluid___aspectRatio',
  socialImage___childrenImageSharp___fluid___src = 'socialImage___childrenImageSharp___fluid___src',
  socialImage___childrenImageSharp___fluid___srcSet = 'socialImage___childrenImageSharp___fluid___srcSet',
  socialImage___childrenImageSharp___fluid___srcWebp = 'socialImage___childrenImageSharp___fluid___srcWebp',
  socialImage___childrenImageSharp___fluid___srcSetWebp = 'socialImage___childrenImageSharp___fluid___srcSetWebp',
  socialImage___childrenImageSharp___fluid___sizes = 'socialImage___childrenImageSharp___fluid___sizes',
  socialImage___childrenImageSharp___fluid___originalImg = 'socialImage___childrenImageSharp___fluid___originalImg',
  socialImage___childrenImageSharp___fluid___originalName = 'socialImage___childrenImageSharp___fluid___originalName',
  socialImage___childrenImageSharp___fluid___presentationWidth = 'socialImage___childrenImageSharp___fluid___presentationWidth',
  socialImage___childrenImageSharp___fluid___presentationHeight = 'socialImage___childrenImageSharp___fluid___presentationHeight',
  socialImage___childrenImageSharp___gatsbyImageData = 'socialImage___childrenImageSharp___gatsbyImageData',
  socialImage___childrenImageSharp___original___width = 'socialImage___childrenImageSharp___original___width',
  socialImage___childrenImageSharp___original___height = 'socialImage___childrenImageSharp___original___height',
  socialImage___childrenImageSharp___original___src = 'socialImage___childrenImageSharp___original___src',
  socialImage___childrenImageSharp___resize___src = 'socialImage___childrenImageSharp___resize___src',
  socialImage___childrenImageSharp___resize___tracedSVG = 'socialImage___childrenImageSharp___resize___tracedSVG',
  socialImage___childrenImageSharp___resize___width = 'socialImage___childrenImageSharp___resize___width',
  socialImage___childrenImageSharp___resize___height = 'socialImage___childrenImageSharp___resize___height',
  socialImage___childrenImageSharp___resize___aspectRatio = 'socialImage___childrenImageSharp___resize___aspectRatio',
  socialImage___childrenImageSharp___resize___originalName = 'socialImage___childrenImageSharp___resize___originalName',
  socialImage___childrenImageSharp___id = 'socialImage___childrenImageSharp___id',
  socialImage___childrenImageSharp___parent___id = 'socialImage___childrenImageSharp___parent___id',
  socialImage___childrenImageSharp___parent___children = 'socialImage___childrenImageSharp___parent___children',
  socialImage___childrenImageSharp___children = 'socialImage___childrenImageSharp___children',
  socialImage___childrenImageSharp___children___id = 'socialImage___childrenImageSharp___children___id',
  socialImage___childrenImageSharp___children___children = 'socialImage___childrenImageSharp___children___children',
  socialImage___childrenImageSharp___internal___content = 'socialImage___childrenImageSharp___internal___content',
  socialImage___childrenImageSharp___internal___contentDigest = 'socialImage___childrenImageSharp___internal___contentDigest',
  socialImage___childrenImageSharp___internal___description = 'socialImage___childrenImageSharp___internal___description',
  socialImage___childrenImageSharp___internal___fieldOwners = 'socialImage___childrenImageSharp___internal___fieldOwners',
  socialImage___childrenImageSharp___internal___ignoreType = 'socialImage___childrenImageSharp___internal___ignoreType',
  socialImage___childrenImageSharp___internal___mediaType = 'socialImage___childrenImageSharp___internal___mediaType',
  socialImage___childrenImageSharp___internal___owner = 'socialImage___childrenImageSharp___internal___owner',
  socialImage___childrenImageSharp___internal___type = 'socialImage___childrenImageSharp___internal___type',
  socialImage___childImageSharp___fixed___base64 = 'socialImage___childImageSharp___fixed___base64',
  socialImage___childImageSharp___fixed___tracedSVG = 'socialImage___childImageSharp___fixed___tracedSVG',
  socialImage___childImageSharp___fixed___aspectRatio = 'socialImage___childImageSharp___fixed___aspectRatio',
  socialImage___childImageSharp___fixed___width = 'socialImage___childImageSharp___fixed___width',
  socialImage___childImageSharp___fixed___height = 'socialImage___childImageSharp___fixed___height',
  socialImage___childImageSharp___fixed___src = 'socialImage___childImageSharp___fixed___src',
  socialImage___childImageSharp___fixed___srcSet = 'socialImage___childImageSharp___fixed___srcSet',
  socialImage___childImageSharp___fixed___srcWebp = 'socialImage___childImageSharp___fixed___srcWebp',
  socialImage___childImageSharp___fixed___srcSetWebp = 'socialImage___childImageSharp___fixed___srcSetWebp',
  socialImage___childImageSharp___fixed___originalName = 'socialImage___childImageSharp___fixed___originalName',
  socialImage___childImageSharp___fluid___base64 = 'socialImage___childImageSharp___fluid___base64',
  socialImage___childImageSharp___fluid___tracedSVG = 'socialImage___childImageSharp___fluid___tracedSVG',
  socialImage___childImageSharp___fluid___aspectRatio = 'socialImage___childImageSharp___fluid___aspectRatio',
  socialImage___childImageSharp___fluid___src = 'socialImage___childImageSharp___fluid___src',
  socialImage___childImageSharp___fluid___srcSet = 'socialImage___childImageSharp___fluid___srcSet',
  socialImage___childImageSharp___fluid___srcWebp = 'socialImage___childImageSharp___fluid___srcWebp',
  socialImage___childImageSharp___fluid___srcSetWebp = 'socialImage___childImageSharp___fluid___srcSetWebp',
  socialImage___childImageSharp___fluid___sizes = 'socialImage___childImageSharp___fluid___sizes',
  socialImage___childImageSharp___fluid___originalImg = 'socialImage___childImageSharp___fluid___originalImg',
  socialImage___childImageSharp___fluid___originalName = 'socialImage___childImageSharp___fluid___originalName',
  socialImage___childImageSharp___fluid___presentationWidth = 'socialImage___childImageSharp___fluid___presentationWidth',
  socialImage___childImageSharp___fluid___presentationHeight = 'socialImage___childImageSharp___fluid___presentationHeight',
  socialImage___childImageSharp___gatsbyImageData = 'socialImage___childImageSharp___gatsbyImageData',
  socialImage___childImageSharp___original___width = 'socialImage___childImageSharp___original___width',
  socialImage___childImageSharp___original___height = 'socialImage___childImageSharp___original___height',
  socialImage___childImageSharp___original___src = 'socialImage___childImageSharp___original___src',
  socialImage___childImageSharp___resize___src = 'socialImage___childImageSharp___resize___src',
  socialImage___childImageSharp___resize___tracedSVG = 'socialImage___childImageSharp___resize___tracedSVG',
  socialImage___childImageSharp___resize___width = 'socialImage___childImageSharp___resize___width',
  socialImage___childImageSharp___resize___height = 'socialImage___childImageSharp___resize___height',
  socialImage___childImageSharp___resize___aspectRatio = 'socialImage___childImageSharp___resize___aspectRatio',
  socialImage___childImageSharp___resize___originalName = 'socialImage___childImageSharp___resize___originalName',
  socialImage___childImageSharp___id = 'socialImage___childImageSharp___id',
  socialImage___childImageSharp___parent___id = 'socialImage___childImageSharp___parent___id',
  socialImage___childImageSharp___parent___children = 'socialImage___childImageSharp___parent___children',
  socialImage___childImageSharp___children = 'socialImage___childImageSharp___children',
  socialImage___childImageSharp___children___id = 'socialImage___childImageSharp___children___id',
  socialImage___childImageSharp___children___children = 'socialImage___childImageSharp___children___children',
  socialImage___childImageSharp___internal___content = 'socialImage___childImageSharp___internal___content',
  socialImage___childImageSharp___internal___contentDigest = 'socialImage___childImageSharp___internal___contentDigest',
  socialImage___childImageSharp___internal___description = 'socialImage___childImageSharp___internal___description',
  socialImage___childImageSharp___internal___fieldOwners = 'socialImage___childImageSharp___internal___fieldOwners',
  socialImage___childImageSharp___internal___ignoreType = 'socialImage___childImageSharp___internal___ignoreType',
  socialImage___childImageSharp___internal___mediaType = 'socialImage___childImageSharp___internal___mediaType',
  socialImage___childImageSharp___internal___owner = 'socialImage___childImageSharp___internal___owner',
  socialImage___childImageSharp___internal___type = 'socialImage___childImageSharp___internal___type',
  socialImage___id = 'socialImage___id',
  socialImage___parent___id = 'socialImage___parent___id',
  socialImage___parent___parent___id = 'socialImage___parent___parent___id',
  socialImage___parent___parent___children = 'socialImage___parent___parent___children',
  socialImage___parent___children = 'socialImage___parent___children',
  socialImage___parent___children___id = 'socialImage___parent___children___id',
  socialImage___parent___children___children = 'socialImage___parent___children___children',
  socialImage___parent___internal___content = 'socialImage___parent___internal___content',
  socialImage___parent___internal___contentDigest = 'socialImage___parent___internal___contentDigest',
  socialImage___parent___internal___description = 'socialImage___parent___internal___description',
  socialImage___parent___internal___fieldOwners = 'socialImage___parent___internal___fieldOwners',
  socialImage___parent___internal___ignoreType = 'socialImage___parent___internal___ignoreType',
  socialImage___parent___internal___mediaType = 'socialImage___parent___internal___mediaType',
  socialImage___parent___internal___owner = 'socialImage___parent___internal___owner',
  socialImage___parent___internal___type = 'socialImage___parent___internal___type',
  socialImage___children = 'socialImage___children',
  socialImage___children___id = 'socialImage___children___id',
  socialImage___children___parent___id = 'socialImage___children___parent___id',
  socialImage___children___parent___children = 'socialImage___children___parent___children',
  socialImage___children___children = 'socialImage___children___children',
  socialImage___children___children___id = 'socialImage___children___children___id',
  socialImage___children___children___children = 'socialImage___children___children___children',
  socialImage___children___internal___content = 'socialImage___children___internal___content',
  socialImage___children___internal___contentDigest = 'socialImage___children___internal___contentDigest',
  socialImage___children___internal___description = 'socialImage___children___internal___description',
  socialImage___children___internal___fieldOwners = 'socialImage___children___internal___fieldOwners',
  socialImage___children___internal___ignoreType = 'socialImage___children___internal___ignoreType',
  socialImage___children___internal___mediaType = 'socialImage___children___internal___mediaType',
  socialImage___children___internal___owner = 'socialImage___children___internal___owner',
  socialImage___children___internal___type = 'socialImage___children___internal___type',
  socialImage___internal___content = 'socialImage___internal___content',
  socialImage___internal___contentDigest = 'socialImage___internal___contentDigest',
  socialImage___internal___description = 'socialImage___internal___description',
  socialImage___internal___fieldOwners = 'socialImage___internal___fieldOwners',
  socialImage___internal___ignoreType = 'socialImage___internal___ignoreType',
  socialImage___internal___mediaType = 'socialImage___internal___mediaType',
  socialImage___internal___owner = 'socialImage___internal___owner',
  socialImage___internal___type = 'socialImage___internal___type',
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
  internal___type = 'internal___type'
}

export type BlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  imageCaptionText?: Maybe<StringQueryOperatorInput>;
  imageCaptionLink?: Maybe<StringQueryOperatorInput>;
  socialImage?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type BlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<BlogPostEdge>;
  nodes: Array<BlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<BlogPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type BlogPostGroupConnectionDistinctArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostGroupConnectionMaxArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostGroupConnectionMinArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostGroupConnectionSumArgs = {
  field: BlogPostFieldsEnum;
};


export type BlogPostGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: BlogPostFieldsEnum;
};

export type BlogPostSortInput = {
  fields?: Maybe<Array<Maybe<BlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  width?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

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
  internal___type = 'internal___type'
}

export type DirectoryFilterInput = {
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
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type FeaturedImage = {
  childImageSharp?: Maybe<ImageSharp>;
};

export type FeaturedImageFilterInput = {
  childImageSharp?: Maybe<ImageSharpFilterInput>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  publicURL?: Maybe<Scalars['String']>;
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  childMdx?: Maybe<Mdx>;
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

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
  childrenMdx = 'childrenMdx',
  childrenMdx___rawBody = 'childrenMdx___rawBody',
  childrenMdx___fileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  childrenMdx___frontmatter___title = 'childrenMdx___frontmatter___title',
  childrenMdx___frontmatter___description = 'childrenMdx___frontmatter___description',
  childrenMdx___frontmatter___sidebar = 'childrenMdx___frontmatter___sidebar',
  childrenMdx___frontmatter___status = 'childrenMdx___frontmatter___status',
  childrenMdx___frontmatter___license = 'childrenMdx___frontmatter___license',
  childrenMdx___frontmatter___path = 'childrenMdx___frontmatter___path',
  childrenMdx___frontmatter___date = 'childrenMdx___frontmatter___date',
  childrenMdx___frontmatter___project = 'childrenMdx___frontmatter___project',
  childrenMdx___frontmatter___comments = 'childrenMdx___frontmatter___comments',
  childrenMdx___frontmatter___projects = 'childrenMdx___frontmatter___projects',
  childrenMdx___frontmatter___tags = 'childrenMdx___frontmatter___tags',
  childrenMdx___slug = 'childrenMdx___slug',
  childrenMdx___body = 'childrenMdx___body',
  childrenMdx___excerpt = 'childrenMdx___excerpt',
  childrenMdx___headings = 'childrenMdx___headings',
  childrenMdx___headings___value = 'childrenMdx___headings___value',
  childrenMdx___headings___depth = 'childrenMdx___headings___depth',
  childrenMdx___html = 'childrenMdx___html',
  childrenMdx___mdxAST = 'childrenMdx___mdxAST',
  childrenMdx___tableOfContents = 'childrenMdx___tableOfContents',
  childrenMdx___timeToRead = 'childrenMdx___timeToRead',
  childrenMdx___wordCount___paragraphs = 'childrenMdx___wordCount___paragraphs',
  childrenMdx___wordCount___sentences = 'childrenMdx___wordCount___sentences',
  childrenMdx___wordCount___words = 'childrenMdx___wordCount___words',
  childrenMdx___fields___description = 'childrenMdx___fields___description',
  childrenMdx___fields___commentsStatus = 'childrenMdx___fields___commentsStatus',
  childrenMdx___fields___slug = 'childrenMdx___fields___slug',
  childrenMdx___fields___projectId = 'childrenMdx___fields___projectId',
  childrenMdx___childrenMdxBlogPost = 'childrenMdx___childrenMdxBlogPost',
  childrenMdx___childrenMdxBlogPost___id = 'childrenMdx___childrenMdxBlogPost___id',
  childrenMdx___childrenMdxBlogPost___title = 'childrenMdx___childrenMdxBlogPost___title',
  childrenMdx___childrenMdxBlogPost___slug = 'childrenMdx___childrenMdxBlogPost___slug',
  childrenMdx___childrenMdxBlogPost___date = 'childrenMdx___childrenMdxBlogPost___date',
  childrenMdx___childrenMdxBlogPost___tags = 'childrenMdx___childrenMdxBlogPost___tags',
  childrenMdx___childrenMdxBlogPost___excerpt = 'childrenMdx___childrenMdxBlogPost___excerpt',
  childrenMdx___childrenMdxBlogPost___image___sourceInstanceName = 'childrenMdx___childrenMdxBlogPost___image___sourceInstanceName',
  childrenMdx___childrenMdxBlogPost___image___absolutePath = 'childrenMdx___childrenMdxBlogPost___image___absolutePath',
  childrenMdx___childrenMdxBlogPost___image___relativePath = 'childrenMdx___childrenMdxBlogPost___image___relativePath',
  childrenMdx___childrenMdxBlogPost___image___extension = 'childrenMdx___childrenMdxBlogPost___image___extension',
  childrenMdx___childrenMdxBlogPost___image___size = 'childrenMdx___childrenMdxBlogPost___image___size',
  childrenMdx___childrenMdxBlogPost___image___prettySize = 'childrenMdx___childrenMdxBlogPost___image___prettySize',
  childrenMdx___childrenMdxBlogPost___image___modifiedTime = 'childrenMdx___childrenMdxBlogPost___image___modifiedTime',
  childrenMdx___childrenMdxBlogPost___image___accessTime = 'childrenMdx___childrenMdxBlogPost___image___accessTime',
  childrenMdx___childrenMdxBlogPost___image___changeTime = 'childrenMdx___childrenMdxBlogPost___image___changeTime',
  childrenMdx___childrenMdxBlogPost___image___birthTime = 'childrenMdx___childrenMdxBlogPost___image___birthTime',
  childrenMdx___childrenMdxBlogPost___image___root = 'childrenMdx___childrenMdxBlogPost___image___root',
  childrenMdx___childrenMdxBlogPost___image___dir = 'childrenMdx___childrenMdxBlogPost___image___dir',
  childrenMdx___childrenMdxBlogPost___image___base = 'childrenMdx___childrenMdxBlogPost___image___base',
  childrenMdx___childrenMdxBlogPost___image___ext = 'childrenMdx___childrenMdxBlogPost___image___ext',
  childrenMdx___childrenMdxBlogPost___image___name = 'childrenMdx___childrenMdxBlogPost___image___name',
  childrenMdx___childrenMdxBlogPost___image___relativeDirectory = 'childrenMdx___childrenMdxBlogPost___image___relativeDirectory',
  childrenMdx___childrenMdxBlogPost___image___dev = 'childrenMdx___childrenMdxBlogPost___image___dev',
  childrenMdx___childrenMdxBlogPost___image___mode = 'childrenMdx___childrenMdxBlogPost___image___mode',
  childrenMdx___childrenMdxBlogPost___image___nlink = 'childrenMdx___childrenMdxBlogPost___image___nlink',
  childrenMdx___childrenMdxBlogPost___image___uid = 'childrenMdx___childrenMdxBlogPost___image___uid',
  childrenMdx___childrenMdxBlogPost___image___gid = 'childrenMdx___childrenMdxBlogPost___image___gid',
  childrenMdx___childrenMdxBlogPost___image___rdev = 'childrenMdx___childrenMdxBlogPost___image___rdev',
  childrenMdx___childrenMdxBlogPost___image___ino = 'childrenMdx___childrenMdxBlogPost___image___ino',
  childrenMdx___childrenMdxBlogPost___image___atimeMs = 'childrenMdx___childrenMdxBlogPost___image___atimeMs',
  childrenMdx___childrenMdxBlogPost___image___mtimeMs = 'childrenMdx___childrenMdxBlogPost___image___mtimeMs',
  childrenMdx___childrenMdxBlogPost___image___ctimeMs = 'childrenMdx___childrenMdxBlogPost___image___ctimeMs',
  childrenMdx___childrenMdxBlogPost___image___atime = 'childrenMdx___childrenMdxBlogPost___image___atime',
  childrenMdx___childrenMdxBlogPost___image___mtime = 'childrenMdx___childrenMdxBlogPost___image___mtime',
  childrenMdx___childrenMdxBlogPost___image___ctime = 'childrenMdx___childrenMdxBlogPost___image___ctime',
  childrenMdx___childrenMdxBlogPost___image___birthtime = 'childrenMdx___childrenMdxBlogPost___image___birthtime',
  childrenMdx___childrenMdxBlogPost___image___birthtimeMs = 'childrenMdx___childrenMdxBlogPost___image___birthtimeMs',
  childrenMdx___childrenMdxBlogPost___image___blksize = 'childrenMdx___childrenMdxBlogPost___image___blksize',
  childrenMdx___childrenMdxBlogPost___image___blocks = 'childrenMdx___childrenMdxBlogPost___image___blocks',
  childrenMdx___childrenMdxBlogPost___image___publicURL = 'childrenMdx___childrenMdxBlogPost___image___publicURL',
  childrenMdx___childrenMdxBlogPost___image___childrenMdx = 'childrenMdx___childrenMdxBlogPost___image___childrenMdx',
  childrenMdx___childrenMdxBlogPost___image___childrenImageSharp = 'childrenMdx___childrenMdxBlogPost___image___childrenImageSharp',
  childrenMdx___childrenMdxBlogPost___image___id = 'childrenMdx___childrenMdxBlogPost___image___id',
  childrenMdx___childrenMdxBlogPost___image___children = 'childrenMdx___childrenMdxBlogPost___image___children',
  childrenMdx___childrenMdxBlogPost___imageAlt = 'childrenMdx___childrenMdxBlogPost___imageAlt',
  childrenMdx___childrenMdxBlogPost___imageCaptionText = 'childrenMdx___childrenMdxBlogPost___imageCaptionText',
  childrenMdx___childrenMdxBlogPost___imageCaptionLink = 'childrenMdx___childrenMdxBlogPost___imageCaptionLink',
  childrenMdx___childrenMdxBlogPost___socialImage___sourceInstanceName = 'childrenMdx___childrenMdxBlogPost___socialImage___sourceInstanceName',
  childrenMdx___childrenMdxBlogPost___socialImage___absolutePath = 'childrenMdx___childrenMdxBlogPost___socialImage___absolutePath',
  childrenMdx___childrenMdxBlogPost___socialImage___relativePath = 'childrenMdx___childrenMdxBlogPost___socialImage___relativePath',
  childrenMdx___childrenMdxBlogPost___socialImage___extension = 'childrenMdx___childrenMdxBlogPost___socialImage___extension',
  childrenMdx___childrenMdxBlogPost___socialImage___size = 'childrenMdx___childrenMdxBlogPost___socialImage___size',
  childrenMdx___childrenMdxBlogPost___socialImage___prettySize = 'childrenMdx___childrenMdxBlogPost___socialImage___prettySize',
  childrenMdx___childrenMdxBlogPost___socialImage___modifiedTime = 'childrenMdx___childrenMdxBlogPost___socialImage___modifiedTime',
  childrenMdx___childrenMdxBlogPost___socialImage___accessTime = 'childrenMdx___childrenMdxBlogPost___socialImage___accessTime',
  childrenMdx___childrenMdxBlogPost___socialImage___changeTime = 'childrenMdx___childrenMdxBlogPost___socialImage___changeTime',
  childrenMdx___childrenMdxBlogPost___socialImage___birthTime = 'childrenMdx___childrenMdxBlogPost___socialImage___birthTime',
  childrenMdx___childrenMdxBlogPost___socialImage___root = 'childrenMdx___childrenMdxBlogPost___socialImage___root',
  childrenMdx___childrenMdxBlogPost___socialImage___dir = 'childrenMdx___childrenMdxBlogPost___socialImage___dir',
  childrenMdx___childrenMdxBlogPost___socialImage___base = 'childrenMdx___childrenMdxBlogPost___socialImage___base',
  childrenMdx___childrenMdxBlogPost___socialImage___ext = 'childrenMdx___childrenMdxBlogPost___socialImage___ext',
  childrenMdx___childrenMdxBlogPost___socialImage___name = 'childrenMdx___childrenMdxBlogPost___socialImage___name',
  childrenMdx___childrenMdxBlogPost___socialImage___relativeDirectory = 'childrenMdx___childrenMdxBlogPost___socialImage___relativeDirectory',
  childrenMdx___childrenMdxBlogPost___socialImage___dev = 'childrenMdx___childrenMdxBlogPost___socialImage___dev',
  childrenMdx___childrenMdxBlogPost___socialImage___mode = 'childrenMdx___childrenMdxBlogPost___socialImage___mode',
  childrenMdx___childrenMdxBlogPost___socialImage___nlink = 'childrenMdx___childrenMdxBlogPost___socialImage___nlink',
  childrenMdx___childrenMdxBlogPost___socialImage___uid = 'childrenMdx___childrenMdxBlogPost___socialImage___uid',
  childrenMdx___childrenMdxBlogPost___socialImage___gid = 'childrenMdx___childrenMdxBlogPost___socialImage___gid',
  childrenMdx___childrenMdxBlogPost___socialImage___rdev = 'childrenMdx___childrenMdxBlogPost___socialImage___rdev',
  childrenMdx___childrenMdxBlogPost___socialImage___ino = 'childrenMdx___childrenMdxBlogPost___socialImage___ino',
  childrenMdx___childrenMdxBlogPost___socialImage___atimeMs = 'childrenMdx___childrenMdxBlogPost___socialImage___atimeMs',
  childrenMdx___childrenMdxBlogPost___socialImage___mtimeMs = 'childrenMdx___childrenMdxBlogPost___socialImage___mtimeMs',
  childrenMdx___childrenMdxBlogPost___socialImage___ctimeMs = 'childrenMdx___childrenMdxBlogPost___socialImage___ctimeMs',
  childrenMdx___childrenMdxBlogPost___socialImage___atime = 'childrenMdx___childrenMdxBlogPost___socialImage___atime',
  childrenMdx___childrenMdxBlogPost___socialImage___mtime = 'childrenMdx___childrenMdxBlogPost___socialImage___mtime',
  childrenMdx___childrenMdxBlogPost___socialImage___ctime = 'childrenMdx___childrenMdxBlogPost___socialImage___ctime',
  childrenMdx___childrenMdxBlogPost___socialImage___birthtime = 'childrenMdx___childrenMdxBlogPost___socialImage___birthtime',
  childrenMdx___childrenMdxBlogPost___socialImage___birthtimeMs = 'childrenMdx___childrenMdxBlogPost___socialImage___birthtimeMs',
  childrenMdx___childrenMdxBlogPost___socialImage___blksize = 'childrenMdx___childrenMdxBlogPost___socialImage___blksize',
  childrenMdx___childrenMdxBlogPost___socialImage___blocks = 'childrenMdx___childrenMdxBlogPost___socialImage___blocks',
  childrenMdx___childrenMdxBlogPost___socialImage___publicURL = 'childrenMdx___childrenMdxBlogPost___socialImage___publicURL',
  childrenMdx___childrenMdxBlogPost___socialImage___childrenMdx = 'childrenMdx___childrenMdxBlogPost___socialImage___childrenMdx',
  childrenMdx___childrenMdxBlogPost___socialImage___childrenImageSharp = 'childrenMdx___childrenMdxBlogPost___socialImage___childrenImageSharp',
  childrenMdx___childrenMdxBlogPost___socialImage___id = 'childrenMdx___childrenMdxBlogPost___socialImage___id',
  childrenMdx___childrenMdxBlogPost___socialImage___children = 'childrenMdx___childrenMdxBlogPost___socialImage___children',
  childrenMdx___childrenMdxBlogPost___body = 'childrenMdx___childrenMdxBlogPost___body',
  childrenMdx___childrenMdxBlogPost___fields___description = 'childrenMdx___childrenMdxBlogPost___fields___description',
  childrenMdx___childrenMdxBlogPost___fields___commentsStatus = 'childrenMdx___childrenMdxBlogPost___fields___commentsStatus',
  childrenMdx___childrenMdxBlogPost___fields___slug = 'childrenMdx___childrenMdxBlogPost___fields___slug',
  childrenMdx___childrenMdxBlogPost___fields___projectId = 'childrenMdx___childrenMdxBlogPost___fields___projectId',
  childrenMdx___childrenMdxBlogPost___parent___id = 'childrenMdx___childrenMdxBlogPost___parent___id',
  childrenMdx___childrenMdxBlogPost___parent___children = 'childrenMdx___childrenMdxBlogPost___parent___children',
  childrenMdx___childrenMdxBlogPost___children = 'childrenMdx___childrenMdxBlogPost___children',
  childrenMdx___childrenMdxBlogPost___children___id = 'childrenMdx___childrenMdxBlogPost___children___id',
  childrenMdx___childrenMdxBlogPost___children___children = 'childrenMdx___childrenMdxBlogPost___children___children',
  childrenMdx___childrenMdxBlogPost___internal___content = 'childrenMdx___childrenMdxBlogPost___internal___content',
  childrenMdx___childrenMdxBlogPost___internal___contentDigest = 'childrenMdx___childrenMdxBlogPost___internal___contentDigest',
  childrenMdx___childrenMdxBlogPost___internal___description = 'childrenMdx___childrenMdxBlogPost___internal___description',
  childrenMdx___childrenMdxBlogPost___internal___fieldOwners = 'childrenMdx___childrenMdxBlogPost___internal___fieldOwners',
  childrenMdx___childrenMdxBlogPost___internal___ignoreType = 'childrenMdx___childrenMdxBlogPost___internal___ignoreType',
  childrenMdx___childrenMdxBlogPost___internal___mediaType = 'childrenMdx___childrenMdxBlogPost___internal___mediaType',
  childrenMdx___childrenMdxBlogPost___internal___owner = 'childrenMdx___childrenMdxBlogPost___internal___owner',
  childrenMdx___childrenMdxBlogPost___internal___type = 'childrenMdx___childrenMdxBlogPost___internal___type',
  childrenMdx___childMdxBlogPost___id = 'childrenMdx___childMdxBlogPost___id',
  childrenMdx___childMdxBlogPost___title = 'childrenMdx___childMdxBlogPost___title',
  childrenMdx___childMdxBlogPost___slug = 'childrenMdx___childMdxBlogPost___slug',
  childrenMdx___childMdxBlogPost___date = 'childrenMdx___childMdxBlogPost___date',
  childrenMdx___childMdxBlogPost___tags = 'childrenMdx___childMdxBlogPost___tags',
  childrenMdx___childMdxBlogPost___excerpt = 'childrenMdx___childMdxBlogPost___excerpt',
  childrenMdx___childMdxBlogPost___image___sourceInstanceName = 'childrenMdx___childMdxBlogPost___image___sourceInstanceName',
  childrenMdx___childMdxBlogPost___image___absolutePath = 'childrenMdx___childMdxBlogPost___image___absolutePath',
  childrenMdx___childMdxBlogPost___image___relativePath = 'childrenMdx___childMdxBlogPost___image___relativePath',
  childrenMdx___childMdxBlogPost___image___extension = 'childrenMdx___childMdxBlogPost___image___extension',
  childrenMdx___childMdxBlogPost___image___size = 'childrenMdx___childMdxBlogPost___image___size',
  childrenMdx___childMdxBlogPost___image___prettySize = 'childrenMdx___childMdxBlogPost___image___prettySize',
  childrenMdx___childMdxBlogPost___image___modifiedTime = 'childrenMdx___childMdxBlogPost___image___modifiedTime',
  childrenMdx___childMdxBlogPost___image___accessTime = 'childrenMdx___childMdxBlogPost___image___accessTime',
  childrenMdx___childMdxBlogPost___image___changeTime = 'childrenMdx___childMdxBlogPost___image___changeTime',
  childrenMdx___childMdxBlogPost___image___birthTime = 'childrenMdx___childMdxBlogPost___image___birthTime',
  childrenMdx___childMdxBlogPost___image___root = 'childrenMdx___childMdxBlogPost___image___root',
  childrenMdx___childMdxBlogPost___image___dir = 'childrenMdx___childMdxBlogPost___image___dir',
  childrenMdx___childMdxBlogPost___image___base = 'childrenMdx___childMdxBlogPost___image___base',
  childrenMdx___childMdxBlogPost___image___ext = 'childrenMdx___childMdxBlogPost___image___ext',
  childrenMdx___childMdxBlogPost___image___name = 'childrenMdx___childMdxBlogPost___image___name',
  childrenMdx___childMdxBlogPost___image___relativeDirectory = 'childrenMdx___childMdxBlogPost___image___relativeDirectory',
  childrenMdx___childMdxBlogPost___image___dev = 'childrenMdx___childMdxBlogPost___image___dev',
  childrenMdx___childMdxBlogPost___image___mode = 'childrenMdx___childMdxBlogPost___image___mode',
  childrenMdx___childMdxBlogPost___image___nlink = 'childrenMdx___childMdxBlogPost___image___nlink',
  childrenMdx___childMdxBlogPost___image___uid = 'childrenMdx___childMdxBlogPost___image___uid',
  childrenMdx___childMdxBlogPost___image___gid = 'childrenMdx___childMdxBlogPost___image___gid',
  childrenMdx___childMdxBlogPost___image___rdev = 'childrenMdx___childMdxBlogPost___image___rdev',
  childrenMdx___childMdxBlogPost___image___ino = 'childrenMdx___childMdxBlogPost___image___ino',
  childrenMdx___childMdxBlogPost___image___atimeMs = 'childrenMdx___childMdxBlogPost___image___atimeMs',
  childrenMdx___childMdxBlogPost___image___mtimeMs = 'childrenMdx___childMdxBlogPost___image___mtimeMs',
  childrenMdx___childMdxBlogPost___image___ctimeMs = 'childrenMdx___childMdxBlogPost___image___ctimeMs',
  childrenMdx___childMdxBlogPost___image___atime = 'childrenMdx___childMdxBlogPost___image___atime',
  childrenMdx___childMdxBlogPost___image___mtime = 'childrenMdx___childMdxBlogPost___image___mtime',
  childrenMdx___childMdxBlogPost___image___ctime = 'childrenMdx___childMdxBlogPost___image___ctime',
  childrenMdx___childMdxBlogPost___image___birthtime = 'childrenMdx___childMdxBlogPost___image___birthtime',
  childrenMdx___childMdxBlogPost___image___birthtimeMs = 'childrenMdx___childMdxBlogPost___image___birthtimeMs',
  childrenMdx___childMdxBlogPost___image___blksize = 'childrenMdx___childMdxBlogPost___image___blksize',
  childrenMdx___childMdxBlogPost___image___blocks = 'childrenMdx___childMdxBlogPost___image___blocks',
  childrenMdx___childMdxBlogPost___image___publicURL = 'childrenMdx___childMdxBlogPost___image___publicURL',
  childrenMdx___childMdxBlogPost___image___childrenMdx = 'childrenMdx___childMdxBlogPost___image___childrenMdx',
  childrenMdx___childMdxBlogPost___image___childrenImageSharp = 'childrenMdx___childMdxBlogPost___image___childrenImageSharp',
  childrenMdx___childMdxBlogPost___image___id = 'childrenMdx___childMdxBlogPost___image___id',
  childrenMdx___childMdxBlogPost___image___children = 'childrenMdx___childMdxBlogPost___image___children',
  childrenMdx___childMdxBlogPost___imageAlt = 'childrenMdx___childMdxBlogPost___imageAlt',
  childrenMdx___childMdxBlogPost___imageCaptionText = 'childrenMdx___childMdxBlogPost___imageCaptionText',
  childrenMdx___childMdxBlogPost___imageCaptionLink = 'childrenMdx___childMdxBlogPost___imageCaptionLink',
  childrenMdx___childMdxBlogPost___socialImage___sourceInstanceName = 'childrenMdx___childMdxBlogPost___socialImage___sourceInstanceName',
  childrenMdx___childMdxBlogPost___socialImage___absolutePath = 'childrenMdx___childMdxBlogPost___socialImage___absolutePath',
  childrenMdx___childMdxBlogPost___socialImage___relativePath = 'childrenMdx___childMdxBlogPost___socialImage___relativePath',
  childrenMdx___childMdxBlogPost___socialImage___extension = 'childrenMdx___childMdxBlogPost___socialImage___extension',
  childrenMdx___childMdxBlogPost___socialImage___size = 'childrenMdx___childMdxBlogPost___socialImage___size',
  childrenMdx___childMdxBlogPost___socialImage___prettySize = 'childrenMdx___childMdxBlogPost___socialImage___prettySize',
  childrenMdx___childMdxBlogPost___socialImage___modifiedTime = 'childrenMdx___childMdxBlogPost___socialImage___modifiedTime',
  childrenMdx___childMdxBlogPost___socialImage___accessTime = 'childrenMdx___childMdxBlogPost___socialImage___accessTime',
  childrenMdx___childMdxBlogPost___socialImage___changeTime = 'childrenMdx___childMdxBlogPost___socialImage___changeTime',
  childrenMdx___childMdxBlogPost___socialImage___birthTime = 'childrenMdx___childMdxBlogPost___socialImage___birthTime',
  childrenMdx___childMdxBlogPost___socialImage___root = 'childrenMdx___childMdxBlogPost___socialImage___root',
  childrenMdx___childMdxBlogPost___socialImage___dir = 'childrenMdx___childMdxBlogPost___socialImage___dir',
  childrenMdx___childMdxBlogPost___socialImage___base = 'childrenMdx___childMdxBlogPost___socialImage___base',
  childrenMdx___childMdxBlogPost___socialImage___ext = 'childrenMdx___childMdxBlogPost___socialImage___ext',
  childrenMdx___childMdxBlogPost___socialImage___name = 'childrenMdx___childMdxBlogPost___socialImage___name',
  childrenMdx___childMdxBlogPost___socialImage___relativeDirectory = 'childrenMdx___childMdxBlogPost___socialImage___relativeDirectory',
  childrenMdx___childMdxBlogPost___socialImage___dev = 'childrenMdx___childMdxBlogPost___socialImage___dev',
  childrenMdx___childMdxBlogPost___socialImage___mode = 'childrenMdx___childMdxBlogPost___socialImage___mode',
  childrenMdx___childMdxBlogPost___socialImage___nlink = 'childrenMdx___childMdxBlogPost___socialImage___nlink',
  childrenMdx___childMdxBlogPost___socialImage___uid = 'childrenMdx___childMdxBlogPost___socialImage___uid',
  childrenMdx___childMdxBlogPost___socialImage___gid = 'childrenMdx___childMdxBlogPost___socialImage___gid',
  childrenMdx___childMdxBlogPost___socialImage___rdev = 'childrenMdx___childMdxBlogPost___socialImage___rdev',
  childrenMdx___childMdxBlogPost___socialImage___ino = 'childrenMdx___childMdxBlogPost___socialImage___ino',
  childrenMdx___childMdxBlogPost___socialImage___atimeMs = 'childrenMdx___childMdxBlogPost___socialImage___atimeMs',
  childrenMdx___childMdxBlogPost___socialImage___mtimeMs = 'childrenMdx___childMdxBlogPost___socialImage___mtimeMs',
  childrenMdx___childMdxBlogPost___socialImage___ctimeMs = 'childrenMdx___childMdxBlogPost___socialImage___ctimeMs',
  childrenMdx___childMdxBlogPost___socialImage___atime = 'childrenMdx___childMdxBlogPost___socialImage___atime',
  childrenMdx___childMdxBlogPost___socialImage___mtime = 'childrenMdx___childMdxBlogPost___socialImage___mtime',
  childrenMdx___childMdxBlogPost___socialImage___ctime = 'childrenMdx___childMdxBlogPost___socialImage___ctime',
  childrenMdx___childMdxBlogPost___socialImage___birthtime = 'childrenMdx___childMdxBlogPost___socialImage___birthtime',
  childrenMdx___childMdxBlogPost___socialImage___birthtimeMs = 'childrenMdx___childMdxBlogPost___socialImage___birthtimeMs',
  childrenMdx___childMdxBlogPost___socialImage___blksize = 'childrenMdx___childMdxBlogPost___socialImage___blksize',
  childrenMdx___childMdxBlogPost___socialImage___blocks = 'childrenMdx___childMdxBlogPost___socialImage___blocks',
  childrenMdx___childMdxBlogPost___socialImage___publicURL = 'childrenMdx___childMdxBlogPost___socialImage___publicURL',
  childrenMdx___childMdxBlogPost___socialImage___childrenMdx = 'childrenMdx___childMdxBlogPost___socialImage___childrenMdx',
  childrenMdx___childMdxBlogPost___socialImage___childrenImageSharp = 'childrenMdx___childMdxBlogPost___socialImage___childrenImageSharp',
  childrenMdx___childMdxBlogPost___socialImage___id = 'childrenMdx___childMdxBlogPost___socialImage___id',
  childrenMdx___childMdxBlogPost___socialImage___children = 'childrenMdx___childMdxBlogPost___socialImage___children',
  childrenMdx___childMdxBlogPost___body = 'childrenMdx___childMdxBlogPost___body',
  childrenMdx___childMdxBlogPost___fields___description = 'childrenMdx___childMdxBlogPost___fields___description',
  childrenMdx___childMdxBlogPost___fields___commentsStatus = 'childrenMdx___childMdxBlogPost___fields___commentsStatus',
  childrenMdx___childMdxBlogPost___fields___slug = 'childrenMdx___childMdxBlogPost___fields___slug',
  childrenMdx___childMdxBlogPost___fields___projectId = 'childrenMdx___childMdxBlogPost___fields___projectId',
  childrenMdx___childMdxBlogPost___parent___id = 'childrenMdx___childMdxBlogPost___parent___id',
  childrenMdx___childMdxBlogPost___parent___children = 'childrenMdx___childMdxBlogPost___parent___children',
  childrenMdx___childMdxBlogPost___children = 'childrenMdx___childMdxBlogPost___children',
  childrenMdx___childMdxBlogPost___children___id = 'childrenMdx___childMdxBlogPost___children___id',
  childrenMdx___childMdxBlogPost___children___children = 'childrenMdx___childMdxBlogPost___children___children',
  childrenMdx___childMdxBlogPost___internal___content = 'childrenMdx___childMdxBlogPost___internal___content',
  childrenMdx___childMdxBlogPost___internal___contentDigest = 'childrenMdx___childMdxBlogPost___internal___contentDigest',
  childrenMdx___childMdxBlogPost___internal___description = 'childrenMdx___childMdxBlogPost___internal___description',
  childrenMdx___childMdxBlogPost___internal___fieldOwners = 'childrenMdx___childMdxBlogPost___internal___fieldOwners',
  childrenMdx___childMdxBlogPost___internal___ignoreType = 'childrenMdx___childMdxBlogPost___internal___ignoreType',
  childrenMdx___childMdxBlogPost___internal___mediaType = 'childrenMdx___childMdxBlogPost___internal___mediaType',
  childrenMdx___childMdxBlogPost___internal___owner = 'childrenMdx___childMdxBlogPost___internal___owner',
  childrenMdx___childMdxBlogPost___internal___type = 'childrenMdx___childMdxBlogPost___internal___type',
  childrenMdx___childrenSidebar = 'childrenMdx___childrenSidebar',
  childrenMdx___childrenSidebar___id = 'childrenMdx___childrenSidebar___id',
  childrenMdx___childrenSidebar___parent___id = 'childrenMdx___childrenSidebar___parent___id',
  childrenMdx___childrenSidebar___parent___children = 'childrenMdx___childrenSidebar___parent___children',
  childrenMdx___childrenSidebar___children = 'childrenMdx___childrenSidebar___children',
  childrenMdx___childrenSidebar___children___id = 'childrenMdx___childrenSidebar___children___id',
  childrenMdx___childrenSidebar___children___children = 'childrenMdx___childrenSidebar___children___children',
  childrenMdx___childrenSidebar___internal___content = 'childrenMdx___childrenSidebar___internal___content',
  childrenMdx___childrenSidebar___internal___contentDigest = 'childrenMdx___childrenSidebar___internal___contentDigest',
  childrenMdx___childrenSidebar___internal___description = 'childrenMdx___childrenSidebar___internal___description',
  childrenMdx___childrenSidebar___internal___fieldOwners = 'childrenMdx___childrenSidebar___internal___fieldOwners',
  childrenMdx___childrenSidebar___internal___ignoreType = 'childrenMdx___childrenSidebar___internal___ignoreType',
  childrenMdx___childrenSidebar___internal___mediaType = 'childrenMdx___childrenSidebar___internal___mediaType',
  childrenMdx___childrenSidebar___internal___owner = 'childrenMdx___childrenSidebar___internal___owner',
  childrenMdx___childrenSidebar___internal___type = 'childrenMdx___childrenSidebar___internal___type',
  childrenMdx___childrenSidebar___slug = 'childrenMdx___childrenSidebar___slug',
  childrenMdx___childrenSidebar___title = 'childrenMdx___childrenSidebar___title',
  childrenMdx___childSidebar___id = 'childrenMdx___childSidebar___id',
  childrenMdx___childSidebar___parent___id = 'childrenMdx___childSidebar___parent___id',
  childrenMdx___childSidebar___parent___children = 'childrenMdx___childSidebar___parent___children',
  childrenMdx___childSidebar___children = 'childrenMdx___childSidebar___children',
  childrenMdx___childSidebar___children___id = 'childrenMdx___childSidebar___children___id',
  childrenMdx___childSidebar___children___children = 'childrenMdx___childSidebar___children___children',
  childrenMdx___childSidebar___internal___content = 'childrenMdx___childSidebar___internal___content',
  childrenMdx___childSidebar___internal___contentDigest = 'childrenMdx___childSidebar___internal___contentDigest',
  childrenMdx___childSidebar___internal___description = 'childrenMdx___childSidebar___internal___description',
  childrenMdx___childSidebar___internal___fieldOwners = 'childrenMdx___childSidebar___internal___fieldOwners',
  childrenMdx___childSidebar___internal___ignoreType = 'childrenMdx___childSidebar___internal___ignoreType',
  childrenMdx___childSidebar___internal___mediaType = 'childrenMdx___childSidebar___internal___mediaType',
  childrenMdx___childSidebar___internal___owner = 'childrenMdx___childSidebar___internal___owner',
  childrenMdx___childSidebar___internal___type = 'childrenMdx___childSidebar___internal___type',
  childrenMdx___childSidebar___slug = 'childrenMdx___childSidebar___slug',
  childrenMdx___childSidebar___title = 'childrenMdx___childSidebar___title',
  childrenMdx___childrenProject = 'childrenMdx___childrenProject',
  childrenMdx___childrenProject___id = 'childrenMdx___childrenProject___id',
  childrenMdx___childrenProject___parent___id = 'childrenMdx___childrenProject___parent___id',
  childrenMdx___childrenProject___parent___children = 'childrenMdx___childrenProject___parent___children',
  childrenMdx___childrenProject___children = 'childrenMdx___childrenProject___children',
  childrenMdx___childrenProject___children___id = 'childrenMdx___childrenProject___children___id',
  childrenMdx___childrenProject___children___children = 'childrenMdx___childrenProject___children___children',
  childrenMdx___childrenProject___internal___content = 'childrenMdx___childrenProject___internal___content',
  childrenMdx___childrenProject___internal___contentDigest = 'childrenMdx___childrenProject___internal___contentDigest',
  childrenMdx___childrenProject___internal___description = 'childrenMdx___childrenProject___internal___description',
  childrenMdx___childrenProject___internal___fieldOwners = 'childrenMdx___childrenProject___internal___fieldOwners',
  childrenMdx___childrenProject___internal___ignoreType = 'childrenMdx___childrenProject___internal___ignoreType',
  childrenMdx___childrenProject___internal___mediaType = 'childrenMdx___childrenProject___internal___mediaType',
  childrenMdx___childrenProject___internal___owner = 'childrenMdx___childrenProject___internal___owner',
  childrenMdx___childrenProject___internal___type = 'childrenMdx___childrenProject___internal___type',
  childrenMdx___childrenProject___projectId = 'childrenMdx___childrenProject___projectId',
  childrenMdx___childrenProject___slug = 'childrenMdx___childrenProject___slug',
  childrenMdx___childrenProject___title = 'childrenMdx___childrenProject___title',
  childrenMdx___childProject___id = 'childrenMdx___childProject___id',
  childrenMdx___childProject___parent___id = 'childrenMdx___childProject___parent___id',
  childrenMdx___childProject___parent___children = 'childrenMdx___childProject___parent___children',
  childrenMdx___childProject___children = 'childrenMdx___childProject___children',
  childrenMdx___childProject___children___id = 'childrenMdx___childProject___children___id',
  childrenMdx___childProject___children___children = 'childrenMdx___childProject___children___children',
  childrenMdx___childProject___internal___content = 'childrenMdx___childProject___internal___content',
  childrenMdx___childProject___internal___contentDigest = 'childrenMdx___childProject___internal___contentDigest',
  childrenMdx___childProject___internal___description = 'childrenMdx___childProject___internal___description',
  childrenMdx___childProject___internal___fieldOwners = 'childrenMdx___childProject___internal___fieldOwners',
  childrenMdx___childProject___internal___ignoreType = 'childrenMdx___childProject___internal___ignoreType',
  childrenMdx___childProject___internal___mediaType = 'childrenMdx___childProject___internal___mediaType',
  childrenMdx___childProject___internal___owner = 'childrenMdx___childProject___internal___owner',
  childrenMdx___childProject___internal___type = 'childrenMdx___childProject___internal___type',
  childrenMdx___childProject___projectId = 'childrenMdx___childProject___projectId',
  childrenMdx___childProject___slug = 'childrenMdx___childProject___slug',
  childrenMdx___childProject___title = 'childrenMdx___childProject___title',
  childrenMdx___id = 'childrenMdx___id',
  childrenMdx___parent___id = 'childrenMdx___parent___id',
  childrenMdx___parent___parent___id = 'childrenMdx___parent___parent___id',
  childrenMdx___parent___parent___children = 'childrenMdx___parent___parent___children',
  childrenMdx___parent___children = 'childrenMdx___parent___children',
  childrenMdx___parent___children___id = 'childrenMdx___parent___children___id',
  childrenMdx___parent___children___children = 'childrenMdx___parent___children___children',
  childrenMdx___parent___internal___content = 'childrenMdx___parent___internal___content',
  childrenMdx___parent___internal___contentDigest = 'childrenMdx___parent___internal___contentDigest',
  childrenMdx___parent___internal___description = 'childrenMdx___parent___internal___description',
  childrenMdx___parent___internal___fieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  childrenMdx___parent___internal___ignoreType = 'childrenMdx___parent___internal___ignoreType',
  childrenMdx___parent___internal___mediaType = 'childrenMdx___parent___internal___mediaType',
  childrenMdx___parent___internal___owner = 'childrenMdx___parent___internal___owner',
  childrenMdx___parent___internal___type = 'childrenMdx___parent___internal___type',
  childrenMdx___children = 'childrenMdx___children',
  childrenMdx___children___id = 'childrenMdx___children___id',
  childrenMdx___children___parent___id = 'childrenMdx___children___parent___id',
  childrenMdx___children___parent___children = 'childrenMdx___children___parent___children',
  childrenMdx___children___children = 'childrenMdx___children___children',
  childrenMdx___children___children___id = 'childrenMdx___children___children___id',
  childrenMdx___children___children___children = 'childrenMdx___children___children___children',
  childrenMdx___children___internal___content = 'childrenMdx___children___internal___content',
  childrenMdx___children___internal___contentDigest = 'childrenMdx___children___internal___contentDigest',
  childrenMdx___children___internal___description = 'childrenMdx___children___internal___description',
  childrenMdx___children___internal___fieldOwners = 'childrenMdx___children___internal___fieldOwners',
  childrenMdx___children___internal___ignoreType = 'childrenMdx___children___internal___ignoreType',
  childrenMdx___children___internal___mediaType = 'childrenMdx___children___internal___mediaType',
  childrenMdx___children___internal___owner = 'childrenMdx___children___internal___owner',
  childrenMdx___children___internal___type = 'childrenMdx___children___internal___type',
  childrenMdx___internal___content = 'childrenMdx___internal___content',
  childrenMdx___internal___contentDigest = 'childrenMdx___internal___contentDigest',
  childrenMdx___internal___description = 'childrenMdx___internal___description',
  childrenMdx___internal___fieldOwners = 'childrenMdx___internal___fieldOwners',
  childrenMdx___internal___ignoreType = 'childrenMdx___internal___ignoreType',
  childrenMdx___internal___mediaType = 'childrenMdx___internal___mediaType',
  childrenMdx___internal___owner = 'childrenMdx___internal___owner',
  childrenMdx___internal___type = 'childrenMdx___internal___type',
  childMdx___rawBody = 'childMdx___rawBody',
  childMdx___fileAbsolutePath = 'childMdx___fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx___frontmatter___title',
  childMdx___frontmatter___description = 'childMdx___frontmatter___description',
  childMdx___frontmatter___sidebar = 'childMdx___frontmatter___sidebar',
  childMdx___frontmatter___status = 'childMdx___frontmatter___status',
  childMdx___frontmatter___license = 'childMdx___frontmatter___license',
  childMdx___frontmatter___path = 'childMdx___frontmatter___path',
  childMdx___frontmatter___date = 'childMdx___frontmatter___date',
  childMdx___frontmatter___project = 'childMdx___frontmatter___project',
  childMdx___frontmatter___comments = 'childMdx___frontmatter___comments',
  childMdx___frontmatter___projects = 'childMdx___frontmatter___projects',
  childMdx___frontmatter___tags = 'childMdx___frontmatter___tags',
  childMdx___slug = 'childMdx___slug',
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
  childMdx___fields___description = 'childMdx___fields___description',
  childMdx___fields___commentsStatus = 'childMdx___fields___commentsStatus',
  childMdx___fields___slug = 'childMdx___fields___slug',
  childMdx___fields___projectId = 'childMdx___fields___projectId',
  childMdx___childrenMdxBlogPost = 'childMdx___childrenMdxBlogPost',
  childMdx___childrenMdxBlogPost___id = 'childMdx___childrenMdxBlogPost___id',
  childMdx___childrenMdxBlogPost___title = 'childMdx___childrenMdxBlogPost___title',
  childMdx___childrenMdxBlogPost___slug = 'childMdx___childrenMdxBlogPost___slug',
  childMdx___childrenMdxBlogPost___date = 'childMdx___childrenMdxBlogPost___date',
  childMdx___childrenMdxBlogPost___tags = 'childMdx___childrenMdxBlogPost___tags',
  childMdx___childrenMdxBlogPost___excerpt = 'childMdx___childrenMdxBlogPost___excerpt',
  childMdx___childrenMdxBlogPost___image___sourceInstanceName = 'childMdx___childrenMdxBlogPost___image___sourceInstanceName',
  childMdx___childrenMdxBlogPost___image___absolutePath = 'childMdx___childrenMdxBlogPost___image___absolutePath',
  childMdx___childrenMdxBlogPost___image___relativePath = 'childMdx___childrenMdxBlogPost___image___relativePath',
  childMdx___childrenMdxBlogPost___image___extension = 'childMdx___childrenMdxBlogPost___image___extension',
  childMdx___childrenMdxBlogPost___image___size = 'childMdx___childrenMdxBlogPost___image___size',
  childMdx___childrenMdxBlogPost___image___prettySize = 'childMdx___childrenMdxBlogPost___image___prettySize',
  childMdx___childrenMdxBlogPost___image___modifiedTime = 'childMdx___childrenMdxBlogPost___image___modifiedTime',
  childMdx___childrenMdxBlogPost___image___accessTime = 'childMdx___childrenMdxBlogPost___image___accessTime',
  childMdx___childrenMdxBlogPost___image___changeTime = 'childMdx___childrenMdxBlogPost___image___changeTime',
  childMdx___childrenMdxBlogPost___image___birthTime = 'childMdx___childrenMdxBlogPost___image___birthTime',
  childMdx___childrenMdxBlogPost___image___root = 'childMdx___childrenMdxBlogPost___image___root',
  childMdx___childrenMdxBlogPost___image___dir = 'childMdx___childrenMdxBlogPost___image___dir',
  childMdx___childrenMdxBlogPost___image___base = 'childMdx___childrenMdxBlogPost___image___base',
  childMdx___childrenMdxBlogPost___image___ext = 'childMdx___childrenMdxBlogPost___image___ext',
  childMdx___childrenMdxBlogPost___image___name = 'childMdx___childrenMdxBlogPost___image___name',
  childMdx___childrenMdxBlogPost___image___relativeDirectory = 'childMdx___childrenMdxBlogPost___image___relativeDirectory',
  childMdx___childrenMdxBlogPost___image___dev = 'childMdx___childrenMdxBlogPost___image___dev',
  childMdx___childrenMdxBlogPost___image___mode = 'childMdx___childrenMdxBlogPost___image___mode',
  childMdx___childrenMdxBlogPost___image___nlink = 'childMdx___childrenMdxBlogPost___image___nlink',
  childMdx___childrenMdxBlogPost___image___uid = 'childMdx___childrenMdxBlogPost___image___uid',
  childMdx___childrenMdxBlogPost___image___gid = 'childMdx___childrenMdxBlogPost___image___gid',
  childMdx___childrenMdxBlogPost___image___rdev = 'childMdx___childrenMdxBlogPost___image___rdev',
  childMdx___childrenMdxBlogPost___image___ino = 'childMdx___childrenMdxBlogPost___image___ino',
  childMdx___childrenMdxBlogPost___image___atimeMs = 'childMdx___childrenMdxBlogPost___image___atimeMs',
  childMdx___childrenMdxBlogPost___image___mtimeMs = 'childMdx___childrenMdxBlogPost___image___mtimeMs',
  childMdx___childrenMdxBlogPost___image___ctimeMs = 'childMdx___childrenMdxBlogPost___image___ctimeMs',
  childMdx___childrenMdxBlogPost___image___atime = 'childMdx___childrenMdxBlogPost___image___atime',
  childMdx___childrenMdxBlogPost___image___mtime = 'childMdx___childrenMdxBlogPost___image___mtime',
  childMdx___childrenMdxBlogPost___image___ctime = 'childMdx___childrenMdxBlogPost___image___ctime',
  childMdx___childrenMdxBlogPost___image___birthtime = 'childMdx___childrenMdxBlogPost___image___birthtime',
  childMdx___childrenMdxBlogPost___image___birthtimeMs = 'childMdx___childrenMdxBlogPost___image___birthtimeMs',
  childMdx___childrenMdxBlogPost___image___blksize = 'childMdx___childrenMdxBlogPost___image___blksize',
  childMdx___childrenMdxBlogPost___image___blocks = 'childMdx___childrenMdxBlogPost___image___blocks',
  childMdx___childrenMdxBlogPost___image___publicURL = 'childMdx___childrenMdxBlogPost___image___publicURL',
  childMdx___childrenMdxBlogPost___image___childrenMdx = 'childMdx___childrenMdxBlogPost___image___childrenMdx',
  childMdx___childrenMdxBlogPost___image___childrenImageSharp = 'childMdx___childrenMdxBlogPost___image___childrenImageSharp',
  childMdx___childrenMdxBlogPost___image___id = 'childMdx___childrenMdxBlogPost___image___id',
  childMdx___childrenMdxBlogPost___image___children = 'childMdx___childrenMdxBlogPost___image___children',
  childMdx___childrenMdxBlogPost___imageAlt = 'childMdx___childrenMdxBlogPost___imageAlt',
  childMdx___childrenMdxBlogPost___imageCaptionText = 'childMdx___childrenMdxBlogPost___imageCaptionText',
  childMdx___childrenMdxBlogPost___imageCaptionLink = 'childMdx___childrenMdxBlogPost___imageCaptionLink',
  childMdx___childrenMdxBlogPost___socialImage___sourceInstanceName = 'childMdx___childrenMdxBlogPost___socialImage___sourceInstanceName',
  childMdx___childrenMdxBlogPost___socialImage___absolutePath = 'childMdx___childrenMdxBlogPost___socialImage___absolutePath',
  childMdx___childrenMdxBlogPost___socialImage___relativePath = 'childMdx___childrenMdxBlogPost___socialImage___relativePath',
  childMdx___childrenMdxBlogPost___socialImage___extension = 'childMdx___childrenMdxBlogPost___socialImage___extension',
  childMdx___childrenMdxBlogPost___socialImage___size = 'childMdx___childrenMdxBlogPost___socialImage___size',
  childMdx___childrenMdxBlogPost___socialImage___prettySize = 'childMdx___childrenMdxBlogPost___socialImage___prettySize',
  childMdx___childrenMdxBlogPost___socialImage___modifiedTime = 'childMdx___childrenMdxBlogPost___socialImage___modifiedTime',
  childMdx___childrenMdxBlogPost___socialImage___accessTime = 'childMdx___childrenMdxBlogPost___socialImage___accessTime',
  childMdx___childrenMdxBlogPost___socialImage___changeTime = 'childMdx___childrenMdxBlogPost___socialImage___changeTime',
  childMdx___childrenMdxBlogPost___socialImage___birthTime = 'childMdx___childrenMdxBlogPost___socialImage___birthTime',
  childMdx___childrenMdxBlogPost___socialImage___root = 'childMdx___childrenMdxBlogPost___socialImage___root',
  childMdx___childrenMdxBlogPost___socialImage___dir = 'childMdx___childrenMdxBlogPost___socialImage___dir',
  childMdx___childrenMdxBlogPost___socialImage___base = 'childMdx___childrenMdxBlogPost___socialImage___base',
  childMdx___childrenMdxBlogPost___socialImage___ext = 'childMdx___childrenMdxBlogPost___socialImage___ext',
  childMdx___childrenMdxBlogPost___socialImage___name = 'childMdx___childrenMdxBlogPost___socialImage___name',
  childMdx___childrenMdxBlogPost___socialImage___relativeDirectory = 'childMdx___childrenMdxBlogPost___socialImage___relativeDirectory',
  childMdx___childrenMdxBlogPost___socialImage___dev = 'childMdx___childrenMdxBlogPost___socialImage___dev',
  childMdx___childrenMdxBlogPost___socialImage___mode = 'childMdx___childrenMdxBlogPost___socialImage___mode',
  childMdx___childrenMdxBlogPost___socialImage___nlink = 'childMdx___childrenMdxBlogPost___socialImage___nlink',
  childMdx___childrenMdxBlogPost___socialImage___uid = 'childMdx___childrenMdxBlogPost___socialImage___uid',
  childMdx___childrenMdxBlogPost___socialImage___gid = 'childMdx___childrenMdxBlogPost___socialImage___gid',
  childMdx___childrenMdxBlogPost___socialImage___rdev = 'childMdx___childrenMdxBlogPost___socialImage___rdev',
  childMdx___childrenMdxBlogPost___socialImage___ino = 'childMdx___childrenMdxBlogPost___socialImage___ino',
  childMdx___childrenMdxBlogPost___socialImage___atimeMs = 'childMdx___childrenMdxBlogPost___socialImage___atimeMs',
  childMdx___childrenMdxBlogPost___socialImage___mtimeMs = 'childMdx___childrenMdxBlogPost___socialImage___mtimeMs',
  childMdx___childrenMdxBlogPost___socialImage___ctimeMs = 'childMdx___childrenMdxBlogPost___socialImage___ctimeMs',
  childMdx___childrenMdxBlogPost___socialImage___atime = 'childMdx___childrenMdxBlogPost___socialImage___atime',
  childMdx___childrenMdxBlogPost___socialImage___mtime = 'childMdx___childrenMdxBlogPost___socialImage___mtime',
  childMdx___childrenMdxBlogPost___socialImage___ctime = 'childMdx___childrenMdxBlogPost___socialImage___ctime',
  childMdx___childrenMdxBlogPost___socialImage___birthtime = 'childMdx___childrenMdxBlogPost___socialImage___birthtime',
  childMdx___childrenMdxBlogPost___socialImage___birthtimeMs = 'childMdx___childrenMdxBlogPost___socialImage___birthtimeMs',
  childMdx___childrenMdxBlogPost___socialImage___blksize = 'childMdx___childrenMdxBlogPost___socialImage___blksize',
  childMdx___childrenMdxBlogPost___socialImage___blocks = 'childMdx___childrenMdxBlogPost___socialImage___blocks',
  childMdx___childrenMdxBlogPost___socialImage___publicURL = 'childMdx___childrenMdxBlogPost___socialImage___publicURL',
  childMdx___childrenMdxBlogPost___socialImage___childrenMdx = 'childMdx___childrenMdxBlogPost___socialImage___childrenMdx',
  childMdx___childrenMdxBlogPost___socialImage___childrenImageSharp = 'childMdx___childrenMdxBlogPost___socialImage___childrenImageSharp',
  childMdx___childrenMdxBlogPost___socialImage___id = 'childMdx___childrenMdxBlogPost___socialImage___id',
  childMdx___childrenMdxBlogPost___socialImage___children = 'childMdx___childrenMdxBlogPost___socialImage___children',
  childMdx___childrenMdxBlogPost___body = 'childMdx___childrenMdxBlogPost___body',
  childMdx___childrenMdxBlogPost___fields___description = 'childMdx___childrenMdxBlogPost___fields___description',
  childMdx___childrenMdxBlogPost___fields___commentsStatus = 'childMdx___childrenMdxBlogPost___fields___commentsStatus',
  childMdx___childrenMdxBlogPost___fields___slug = 'childMdx___childrenMdxBlogPost___fields___slug',
  childMdx___childrenMdxBlogPost___fields___projectId = 'childMdx___childrenMdxBlogPost___fields___projectId',
  childMdx___childrenMdxBlogPost___parent___id = 'childMdx___childrenMdxBlogPost___parent___id',
  childMdx___childrenMdxBlogPost___parent___children = 'childMdx___childrenMdxBlogPost___parent___children',
  childMdx___childrenMdxBlogPost___children = 'childMdx___childrenMdxBlogPost___children',
  childMdx___childrenMdxBlogPost___children___id = 'childMdx___childrenMdxBlogPost___children___id',
  childMdx___childrenMdxBlogPost___children___children = 'childMdx___childrenMdxBlogPost___children___children',
  childMdx___childrenMdxBlogPost___internal___content = 'childMdx___childrenMdxBlogPost___internal___content',
  childMdx___childrenMdxBlogPost___internal___contentDigest = 'childMdx___childrenMdxBlogPost___internal___contentDigest',
  childMdx___childrenMdxBlogPost___internal___description = 'childMdx___childrenMdxBlogPost___internal___description',
  childMdx___childrenMdxBlogPost___internal___fieldOwners = 'childMdx___childrenMdxBlogPost___internal___fieldOwners',
  childMdx___childrenMdxBlogPost___internal___ignoreType = 'childMdx___childrenMdxBlogPost___internal___ignoreType',
  childMdx___childrenMdxBlogPost___internal___mediaType = 'childMdx___childrenMdxBlogPost___internal___mediaType',
  childMdx___childrenMdxBlogPost___internal___owner = 'childMdx___childrenMdxBlogPost___internal___owner',
  childMdx___childrenMdxBlogPost___internal___type = 'childMdx___childrenMdxBlogPost___internal___type',
  childMdx___childMdxBlogPost___id = 'childMdx___childMdxBlogPost___id',
  childMdx___childMdxBlogPost___title = 'childMdx___childMdxBlogPost___title',
  childMdx___childMdxBlogPost___slug = 'childMdx___childMdxBlogPost___slug',
  childMdx___childMdxBlogPost___date = 'childMdx___childMdxBlogPost___date',
  childMdx___childMdxBlogPost___tags = 'childMdx___childMdxBlogPost___tags',
  childMdx___childMdxBlogPost___excerpt = 'childMdx___childMdxBlogPost___excerpt',
  childMdx___childMdxBlogPost___image___sourceInstanceName = 'childMdx___childMdxBlogPost___image___sourceInstanceName',
  childMdx___childMdxBlogPost___image___absolutePath = 'childMdx___childMdxBlogPost___image___absolutePath',
  childMdx___childMdxBlogPost___image___relativePath = 'childMdx___childMdxBlogPost___image___relativePath',
  childMdx___childMdxBlogPost___image___extension = 'childMdx___childMdxBlogPost___image___extension',
  childMdx___childMdxBlogPost___image___size = 'childMdx___childMdxBlogPost___image___size',
  childMdx___childMdxBlogPost___image___prettySize = 'childMdx___childMdxBlogPost___image___prettySize',
  childMdx___childMdxBlogPost___image___modifiedTime = 'childMdx___childMdxBlogPost___image___modifiedTime',
  childMdx___childMdxBlogPost___image___accessTime = 'childMdx___childMdxBlogPost___image___accessTime',
  childMdx___childMdxBlogPost___image___changeTime = 'childMdx___childMdxBlogPost___image___changeTime',
  childMdx___childMdxBlogPost___image___birthTime = 'childMdx___childMdxBlogPost___image___birthTime',
  childMdx___childMdxBlogPost___image___root = 'childMdx___childMdxBlogPost___image___root',
  childMdx___childMdxBlogPost___image___dir = 'childMdx___childMdxBlogPost___image___dir',
  childMdx___childMdxBlogPost___image___base = 'childMdx___childMdxBlogPost___image___base',
  childMdx___childMdxBlogPost___image___ext = 'childMdx___childMdxBlogPost___image___ext',
  childMdx___childMdxBlogPost___image___name = 'childMdx___childMdxBlogPost___image___name',
  childMdx___childMdxBlogPost___image___relativeDirectory = 'childMdx___childMdxBlogPost___image___relativeDirectory',
  childMdx___childMdxBlogPost___image___dev = 'childMdx___childMdxBlogPost___image___dev',
  childMdx___childMdxBlogPost___image___mode = 'childMdx___childMdxBlogPost___image___mode',
  childMdx___childMdxBlogPost___image___nlink = 'childMdx___childMdxBlogPost___image___nlink',
  childMdx___childMdxBlogPost___image___uid = 'childMdx___childMdxBlogPost___image___uid',
  childMdx___childMdxBlogPost___image___gid = 'childMdx___childMdxBlogPost___image___gid',
  childMdx___childMdxBlogPost___image___rdev = 'childMdx___childMdxBlogPost___image___rdev',
  childMdx___childMdxBlogPost___image___ino = 'childMdx___childMdxBlogPost___image___ino',
  childMdx___childMdxBlogPost___image___atimeMs = 'childMdx___childMdxBlogPost___image___atimeMs',
  childMdx___childMdxBlogPost___image___mtimeMs = 'childMdx___childMdxBlogPost___image___mtimeMs',
  childMdx___childMdxBlogPost___image___ctimeMs = 'childMdx___childMdxBlogPost___image___ctimeMs',
  childMdx___childMdxBlogPost___image___atime = 'childMdx___childMdxBlogPost___image___atime',
  childMdx___childMdxBlogPost___image___mtime = 'childMdx___childMdxBlogPost___image___mtime',
  childMdx___childMdxBlogPost___image___ctime = 'childMdx___childMdxBlogPost___image___ctime',
  childMdx___childMdxBlogPost___image___birthtime = 'childMdx___childMdxBlogPost___image___birthtime',
  childMdx___childMdxBlogPost___image___birthtimeMs = 'childMdx___childMdxBlogPost___image___birthtimeMs',
  childMdx___childMdxBlogPost___image___blksize = 'childMdx___childMdxBlogPost___image___blksize',
  childMdx___childMdxBlogPost___image___blocks = 'childMdx___childMdxBlogPost___image___blocks',
  childMdx___childMdxBlogPost___image___publicURL = 'childMdx___childMdxBlogPost___image___publicURL',
  childMdx___childMdxBlogPost___image___childrenMdx = 'childMdx___childMdxBlogPost___image___childrenMdx',
  childMdx___childMdxBlogPost___image___childrenImageSharp = 'childMdx___childMdxBlogPost___image___childrenImageSharp',
  childMdx___childMdxBlogPost___image___id = 'childMdx___childMdxBlogPost___image___id',
  childMdx___childMdxBlogPost___image___children = 'childMdx___childMdxBlogPost___image___children',
  childMdx___childMdxBlogPost___imageAlt = 'childMdx___childMdxBlogPost___imageAlt',
  childMdx___childMdxBlogPost___imageCaptionText = 'childMdx___childMdxBlogPost___imageCaptionText',
  childMdx___childMdxBlogPost___imageCaptionLink = 'childMdx___childMdxBlogPost___imageCaptionLink',
  childMdx___childMdxBlogPost___socialImage___sourceInstanceName = 'childMdx___childMdxBlogPost___socialImage___sourceInstanceName',
  childMdx___childMdxBlogPost___socialImage___absolutePath = 'childMdx___childMdxBlogPost___socialImage___absolutePath',
  childMdx___childMdxBlogPost___socialImage___relativePath = 'childMdx___childMdxBlogPost___socialImage___relativePath',
  childMdx___childMdxBlogPost___socialImage___extension = 'childMdx___childMdxBlogPost___socialImage___extension',
  childMdx___childMdxBlogPost___socialImage___size = 'childMdx___childMdxBlogPost___socialImage___size',
  childMdx___childMdxBlogPost___socialImage___prettySize = 'childMdx___childMdxBlogPost___socialImage___prettySize',
  childMdx___childMdxBlogPost___socialImage___modifiedTime = 'childMdx___childMdxBlogPost___socialImage___modifiedTime',
  childMdx___childMdxBlogPost___socialImage___accessTime = 'childMdx___childMdxBlogPost___socialImage___accessTime',
  childMdx___childMdxBlogPost___socialImage___changeTime = 'childMdx___childMdxBlogPost___socialImage___changeTime',
  childMdx___childMdxBlogPost___socialImage___birthTime = 'childMdx___childMdxBlogPost___socialImage___birthTime',
  childMdx___childMdxBlogPost___socialImage___root = 'childMdx___childMdxBlogPost___socialImage___root',
  childMdx___childMdxBlogPost___socialImage___dir = 'childMdx___childMdxBlogPost___socialImage___dir',
  childMdx___childMdxBlogPost___socialImage___base = 'childMdx___childMdxBlogPost___socialImage___base',
  childMdx___childMdxBlogPost___socialImage___ext = 'childMdx___childMdxBlogPost___socialImage___ext',
  childMdx___childMdxBlogPost___socialImage___name = 'childMdx___childMdxBlogPost___socialImage___name',
  childMdx___childMdxBlogPost___socialImage___relativeDirectory = 'childMdx___childMdxBlogPost___socialImage___relativeDirectory',
  childMdx___childMdxBlogPost___socialImage___dev = 'childMdx___childMdxBlogPost___socialImage___dev',
  childMdx___childMdxBlogPost___socialImage___mode = 'childMdx___childMdxBlogPost___socialImage___mode',
  childMdx___childMdxBlogPost___socialImage___nlink = 'childMdx___childMdxBlogPost___socialImage___nlink',
  childMdx___childMdxBlogPost___socialImage___uid = 'childMdx___childMdxBlogPost___socialImage___uid',
  childMdx___childMdxBlogPost___socialImage___gid = 'childMdx___childMdxBlogPost___socialImage___gid',
  childMdx___childMdxBlogPost___socialImage___rdev = 'childMdx___childMdxBlogPost___socialImage___rdev',
  childMdx___childMdxBlogPost___socialImage___ino = 'childMdx___childMdxBlogPost___socialImage___ino',
  childMdx___childMdxBlogPost___socialImage___atimeMs = 'childMdx___childMdxBlogPost___socialImage___atimeMs',
  childMdx___childMdxBlogPost___socialImage___mtimeMs = 'childMdx___childMdxBlogPost___socialImage___mtimeMs',
  childMdx___childMdxBlogPost___socialImage___ctimeMs = 'childMdx___childMdxBlogPost___socialImage___ctimeMs',
  childMdx___childMdxBlogPost___socialImage___atime = 'childMdx___childMdxBlogPost___socialImage___atime',
  childMdx___childMdxBlogPost___socialImage___mtime = 'childMdx___childMdxBlogPost___socialImage___mtime',
  childMdx___childMdxBlogPost___socialImage___ctime = 'childMdx___childMdxBlogPost___socialImage___ctime',
  childMdx___childMdxBlogPost___socialImage___birthtime = 'childMdx___childMdxBlogPost___socialImage___birthtime',
  childMdx___childMdxBlogPost___socialImage___birthtimeMs = 'childMdx___childMdxBlogPost___socialImage___birthtimeMs',
  childMdx___childMdxBlogPost___socialImage___blksize = 'childMdx___childMdxBlogPost___socialImage___blksize',
  childMdx___childMdxBlogPost___socialImage___blocks = 'childMdx___childMdxBlogPost___socialImage___blocks',
  childMdx___childMdxBlogPost___socialImage___publicURL = 'childMdx___childMdxBlogPost___socialImage___publicURL',
  childMdx___childMdxBlogPost___socialImage___childrenMdx = 'childMdx___childMdxBlogPost___socialImage___childrenMdx',
  childMdx___childMdxBlogPost___socialImage___childrenImageSharp = 'childMdx___childMdxBlogPost___socialImage___childrenImageSharp',
  childMdx___childMdxBlogPost___socialImage___id = 'childMdx___childMdxBlogPost___socialImage___id',
  childMdx___childMdxBlogPost___socialImage___children = 'childMdx___childMdxBlogPost___socialImage___children',
  childMdx___childMdxBlogPost___body = 'childMdx___childMdxBlogPost___body',
  childMdx___childMdxBlogPost___fields___description = 'childMdx___childMdxBlogPost___fields___description',
  childMdx___childMdxBlogPost___fields___commentsStatus = 'childMdx___childMdxBlogPost___fields___commentsStatus',
  childMdx___childMdxBlogPost___fields___slug = 'childMdx___childMdxBlogPost___fields___slug',
  childMdx___childMdxBlogPost___fields___projectId = 'childMdx___childMdxBlogPost___fields___projectId',
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
  childMdx___childrenSidebar = 'childMdx___childrenSidebar',
  childMdx___childrenSidebar___id = 'childMdx___childrenSidebar___id',
  childMdx___childrenSidebar___parent___id = 'childMdx___childrenSidebar___parent___id',
  childMdx___childrenSidebar___parent___children = 'childMdx___childrenSidebar___parent___children',
  childMdx___childrenSidebar___children = 'childMdx___childrenSidebar___children',
  childMdx___childrenSidebar___children___id = 'childMdx___childrenSidebar___children___id',
  childMdx___childrenSidebar___children___children = 'childMdx___childrenSidebar___children___children',
  childMdx___childrenSidebar___internal___content = 'childMdx___childrenSidebar___internal___content',
  childMdx___childrenSidebar___internal___contentDigest = 'childMdx___childrenSidebar___internal___contentDigest',
  childMdx___childrenSidebar___internal___description = 'childMdx___childrenSidebar___internal___description',
  childMdx___childrenSidebar___internal___fieldOwners = 'childMdx___childrenSidebar___internal___fieldOwners',
  childMdx___childrenSidebar___internal___ignoreType = 'childMdx___childrenSidebar___internal___ignoreType',
  childMdx___childrenSidebar___internal___mediaType = 'childMdx___childrenSidebar___internal___mediaType',
  childMdx___childrenSidebar___internal___owner = 'childMdx___childrenSidebar___internal___owner',
  childMdx___childrenSidebar___internal___type = 'childMdx___childrenSidebar___internal___type',
  childMdx___childrenSidebar___slug = 'childMdx___childrenSidebar___slug',
  childMdx___childrenSidebar___title = 'childMdx___childrenSidebar___title',
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
  childMdx___childrenProject = 'childMdx___childrenProject',
  childMdx___childrenProject___id = 'childMdx___childrenProject___id',
  childMdx___childrenProject___parent___id = 'childMdx___childrenProject___parent___id',
  childMdx___childrenProject___parent___children = 'childMdx___childrenProject___parent___children',
  childMdx___childrenProject___children = 'childMdx___childrenProject___children',
  childMdx___childrenProject___children___id = 'childMdx___childrenProject___children___id',
  childMdx___childrenProject___children___children = 'childMdx___childrenProject___children___children',
  childMdx___childrenProject___internal___content = 'childMdx___childrenProject___internal___content',
  childMdx___childrenProject___internal___contentDigest = 'childMdx___childrenProject___internal___contentDigest',
  childMdx___childrenProject___internal___description = 'childMdx___childrenProject___internal___description',
  childMdx___childrenProject___internal___fieldOwners = 'childMdx___childrenProject___internal___fieldOwners',
  childMdx___childrenProject___internal___ignoreType = 'childMdx___childrenProject___internal___ignoreType',
  childMdx___childrenProject___internal___mediaType = 'childMdx___childrenProject___internal___mediaType',
  childMdx___childrenProject___internal___owner = 'childMdx___childrenProject___internal___owner',
  childMdx___childrenProject___internal___type = 'childMdx___childrenProject___internal___type',
  childMdx___childrenProject___projectId = 'childMdx___childrenProject___projectId',
  childMdx___childrenProject___slug = 'childMdx___childrenProject___slug',
  childMdx___childrenProject___title = 'childMdx___childrenProject___title',
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
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
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
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
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
  internal___type = 'internal___type'
}

export type FileFilterInput = {
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
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum GatsbyImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum GatsbyImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
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
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

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
  gatsbyImageData = 'gatsbyImageData',
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
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
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
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
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
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  fields?: Maybe<MdxFields>;
  childrenMdxBlogPost?: Maybe<Array<Maybe<MdxBlogPost>>>;
  childMdxBlogPost?: Maybe<MdxBlogPost>;
  childrenSidebar?: Maybe<Array<Maybe<Sidebar>>>;
  childSidebar?: Maybe<Sidebar>;
  childrenProject?: Maybe<Array<Maybe<Project>>>;
  childProject?: Maybe<Project>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxBlogPost = Node & BlogPost & {
  id: Scalars['ID'];
  title: Scalars['String'];
  slug: Scalars['String'];
  date: Scalars['Date'];
  tags: Array<Maybe<Scalars['String']>>;
  excerpt: Scalars['String'];
  image?: Maybe<File>;
  imageAlt?: Maybe<Scalars['String']>;
  imageCaptionText?: Maybe<Scalars['String']>;
  imageCaptionLink?: Maybe<Scalars['String']>;
  socialImage?: Maybe<File>;
  body: Scalars['String'];
  fields?: Maybe<MdxFields>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxBlogPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MdxBlogPostExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
};

export type MdxBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxBlogPostEdge>;
  nodes: Array<MdxBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxBlogPostGroupConnection>;
};


export type MdxBlogPostConnectionDistinctArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostConnectionMaxArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostConnectionMinArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostConnectionSumArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxBlogPostFieldsEnum;
};

export type MdxBlogPostEdge = {
  next?: Maybe<MdxBlogPost>;
  node: MdxBlogPost;
  previous?: Maybe<MdxBlogPost>;
};

export enum MdxBlogPostFieldsEnum {
  id = 'id',
  title = 'title',
  slug = 'slug',
  date = 'date',
  tags = 'tags',
  excerpt = 'excerpt',
  image___sourceInstanceName = 'image___sourceInstanceName',
  image___absolutePath = 'image___absolutePath',
  image___relativePath = 'image___relativePath',
  image___extension = 'image___extension',
  image___size = 'image___size',
  image___prettySize = 'image___prettySize',
  image___modifiedTime = 'image___modifiedTime',
  image___accessTime = 'image___accessTime',
  image___changeTime = 'image___changeTime',
  image___birthTime = 'image___birthTime',
  image___root = 'image___root',
  image___dir = 'image___dir',
  image___base = 'image___base',
  image___ext = 'image___ext',
  image___name = 'image___name',
  image___relativeDirectory = 'image___relativeDirectory',
  image___dev = 'image___dev',
  image___mode = 'image___mode',
  image___nlink = 'image___nlink',
  image___uid = 'image___uid',
  image___gid = 'image___gid',
  image___rdev = 'image___rdev',
  image___ino = 'image___ino',
  image___atimeMs = 'image___atimeMs',
  image___mtimeMs = 'image___mtimeMs',
  image___ctimeMs = 'image___ctimeMs',
  image___atime = 'image___atime',
  image___mtime = 'image___mtime',
  image___ctime = 'image___ctime',
  image___birthtime = 'image___birthtime',
  image___birthtimeMs = 'image___birthtimeMs',
  image___blksize = 'image___blksize',
  image___blocks = 'image___blocks',
  image___publicURL = 'image___publicURL',
  image___childrenMdx = 'image___childrenMdx',
  image___childrenMdx___rawBody = 'image___childrenMdx___rawBody',
  image___childrenMdx___fileAbsolutePath = 'image___childrenMdx___fileAbsolutePath',
  image___childrenMdx___frontmatter___title = 'image___childrenMdx___frontmatter___title',
  image___childrenMdx___frontmatter___description = 'image___childrenMdx___frontmatter___description',
  image___childrenMdx___frontmatter___sidebar = 'image___childrenMdx___frontmatter___sidebar',
  image___childrenMdx___frontmatter___status = 'image___childrenMdx___frontmatter___status',
  image___childrenMdx___frontmatter___license = 'image___childrenMdx___frontmatter___license',
  image___childrenMdx___frontmatter___path = 'image___childrenMdx___frontmatter___path',
  image___childrenMdx___frontmatter___date = 'image___childrenMdx___frontmatter___date',
  image___childrenMdx___frontmatter___project = 'image___childrenMdx___frontmatter___project',
  image___childrenMdx___frontmatter___comments = 'image___childrenMdx___frontmatter___comments',
  image___childrenMdx___frontmatter___projects = 'image___childrenMdx___frontmatter___projects',
  image___childrenMdx___frontmatter___tags = 'image___childrenMdx___frontmatter___tags',
  image___childrenMdx___slug = 'image___childrenMdx___slug',
  image___childrenMdx___body = 'image___childrenMdx___body',
  image___childrenMdx___excerpt = 'image___childrenMdx___excerpt',
  image___childrenMdx___headings = 'image___childrenMdx___headings',
  image___childrenMdx___headings___value = 'image___childrenMdx___headings___value',
  image___childrenMdx___headings___depth = 'image___childrenMdx___headings___depth',
  image___childrenMdx___html = 'image___childrenMdx___html',
  image___childrenMdx___mdxAST = 'image___childrenMdx___mdxAST',
  image___childrenMdx___tableOfContents = 'image___childrenMdx___tableOfContents',
  image___childrenMdx___timeToRead = 'image___childrenMdx___timeToRead',
  image___childrenMdx___wordCount___paragraphs = 'image___childrenMdx___wordCount___paragraphs',
  image___childrenMdx___wordCount___sentences = 'image___childrenMdx___wordCount___sentences',
  image___childrenMdx___wordCount___words = 'image___childrenMdx___wordCount___words',
  image___childrenMdx___fields___description = 'image___childrenMdx___fields___description',
  image___childrenMdx___fields___commentsStatus = 'image___childrenMdx___fields___commentsStatus',
  image___childrenMdx___fields___slug = 'image___childrenMdx___fields___slug',
  image___childrenMdx___fields___projectId = 'image___childrenMdx___fields___projectId',
  image___childrenMdx___childrenMdxBlogPost = 'image___childrenMdx___childrenMdxBlogPost',
  image___childrenMdx___childrenMdxBlogPost___id = 'image___childrenMdx___childrenMdxBlogPost___id',
  image___childrenMdx___childrenMdxBlogPost___title = 'image___childrenMdx___childrenMdxBlogPost___title',
  image___childrenMdx___childrenMdxBlogPost___slug = 'image___childrenMdx___childrenMdxBlogPost___slug',
  image___childrenMdx___childrenMdxBlogPost___date = 'image___childrenMdx___childrenMdxBlogPost___date',
  image___childrenMdx___childrenMdxBlogPost___tags = 'image___childrenMdx___childrenMdxBlogPost___tags',
  image___childrenMdx___childrenMdxBlogPost___excerpt = 'image___childrenMdx___childrenMdxBlogPost___excerpt',
  image___childrenMdx___childrenMdxBlogPost___imageAlt = 'image___childrenMdx___childrenMdxBlogPost___imageAlt',
  image___childrenMdx___childrenMdxBlogPost___imageCaptionText = 'image___childrenMdx___childrenMdxBlogPost___imageCaptionText',
  image___childrenMdx___childrenMdxBlogPost___imageCaptionLink = 'image___childrenMdx___childrenMdxBlogPost___imageCaptionLink',
  image___childrenMdx___childrenMdxBlogPost___body = 'image___childrenMdx___childrenMdxBlogPost___body',
  image___childrenMdx___childrenMdxBlogPost___children = 'image___childrenMdx___childrenMdxBlogPost___children',
  image___childrenMdx___childMdxBlogPost___id = 'image___childrenMdx___childMdxBlogPost___id',
  image___childrenMdx___childMdxBlogPost___title = 'image___childrenMdx___childMdxBlogPost___title',
  image___childrenMdx___childMdxBlogPost___slug = 'image___childrenMdx___childMdxBlogPost___slug',
  image___childrenMdx___childMdxBlogPost___date = 'image___childrenMdx___childMdxBlogPost___date',
  image___childrenMdx___childMdxBlogPost___tags = 'image___childrenMdx___childMdxBlogPost___tags',
  image___childrenMdx___childMdxBlogPost___excerpt = 'image___childrenMdx___childMdxBlogPost___excerpt',
  image___childrenMdx___childMdxBlogPost___imageAlt = 'image___childrenMdx___childMdxBlogPost___imageAlt',
  image___childrenMdx___childMdxBlogPost___imageCaptionText = 'image___childrenMdx___childMdxBlogPost___imageCaptionText',
  image___childrenMdx___childMdxBlogPost___imageCaptionLink = 'image___childrenMdx___childMdxBlogPost___imageCaptionLink',
  image___childrenMdx___childMdxBlogPost___body = 'image___childrenMdx___childMdxBlogPost___body',
  image___childrenMdx___childMdxBlogPost___children = 'image___childrenMdx___childMdxBlogPost___children',
  image___childrenMdx___childrenSidebar = 'image___childrenMdx___childrenSidebar',
  image___childrenMdx___childrenSidebar___id = 'image___childrenMdx___childrenSidebar___id',
  image___childrenMdx___childrenSidebar___children = 'image___childrenMdx___childrenSidebar___children',
  image___childrenMdx___childrenSidebar___slug = 'image___childrenMdx___childrenSidebar___slug',
  image___childrenMdx___childrenSidebar___title = 'image___childrenMdx___childrenSidebar___title',
  image___childrenMdx___childSidebar___id = 'image___childrenMdx___childSidebar___id',
  image___childrenMdx___childSidebar___children = 'image___childrenMdx___childSidebar___children',
  image___childrenMdx___childSidebar___slug = 'image___childrenMdx___childSidebar___slug',
  image___childrenMdx___childSidebar___title = 'image___childrenMdx___childSidebar___title',
  image___childrenMdx___childrenProject = 'image___childrenMdx___childrenProject',
  image___childrenMdx___childrenProject___id = 'image___childrenMdx___childrenProject___id',
  image___childrenMdx___childrenProject___children = 'image___childrenMdx___childrenProject___children',
  image___childrenMdx___childrenProject___projectId = 'image___childrenMdx___childrenProject___projectId',
  image___childrenMdx___childrenProject___slug = 'image___childrenMdx___childrenProject___slug',
  image___childrenMdx___childrenProject___title = 'image___childrenMdx___childrenProject___title',
  image___childrenMdx___childProject___id = 'image___childrenMdx___childProject___id',
  image___childrenMdx___childProject___children = 'image___childrenMdx___childProject___children',
  image___childrenMdx___childProject___projectId = 'image___childrenMdx___childProject___projectId',
  image___childrenMdx___childProject___slug = 'image___childrenMdx___childProject___slug',
  image___childrenMdx___childProject___title = 'image___childrenMdx___childProject___title',
  image___childrenMdx___id = 'image___childrenMdx___id',
  image___childrenMdx___parent___id = 'image___childrenMdx___parent___id',
  image___childrenMdx___parent___children = 'image___childrenMdx___parent___children',
  image___childrenMdx___children = 'image___childrenMdx___children',
  image___childrenMdx___children___id = 'image___childrenMdx___children___id',
  image___childrenMdx___children___children = 'image___childrenMdx___children___children',
  image___childrenMdx___internal___content = 'image___childrenMdx___internal___content',
  image___childrenMdx___internal___contentDigest = 'image___childrenMdx___internal___contentDigest',
  image___childrenMdx___internal___description = 'image___childrenMdx___internal___description',
  image___childrenMdx___internal___fieldOwners = 'image___childrenMdx___internal___fieldOwners',
  image___childrenMdx___internal___ignoreType = 'image___childrenMdx___internal___ignoreType',
  image___childrenMdx___internal___mediaType = 'image___childrenMdx___internal___mediaType',
  image___childrenMdx___internal___owner = 'image___childrenMdx___internal___owner',
  image___childrenMdx___internal___type = 'image___childrenMdx___internal___type',
  image___childMdx___rawBody = 'image___childMdx___rawBody',
  image___childMdx___fileAbsolutePath = 'image___childMdx___fileAbsolutePath',
  image___childMdx___frontmatter___title = 'image___childMdx___frontmatter___title',
  image___childMdx___frontmatter___description = 'image___childMdx___frontmatter___description',
  image___childMdx___frontmatter___sidebar = 'image___childMdx___frontmatter___sidebar',
  image___childMdx___frontmatter___status = 'image___childMdx___frontmatter___status',
  image___childMdx___frontmatter___license = 'image___childMdx___frontmatter___license',
  image___childMdx___frontmatter___path = 'image___childMdx___frontmatter___path',
  image___childMdx___frontmatter___date = 'image___childMdx___frontmatter___date',
  image___childMdx___frontmatter___project = 'image___childMdx___frontmatter___project',
  image___childMdx___frontmatter___comments = 'image___childMdx___frontmatter___comments',
  image___childMdx___frontmatter___projects = 'image___childMdx___frontmatter___projects',
  image___childMdx___frontmatter___tags = 'image___childMdx___frontmatter___tags',
  image___childMdx___slug = 'image___childMdx___slug',
  image___childMdx___body = 'image___childMdx___body',
  image___childMdx___excerpt = 'image___childMdx___excerpt',
  image___childMdx___headings = 'image___childMdx___headings',
  image___childMdx___headings___value = 'image___childMdx___headings___value',
  image___childMdx___headings___depth = 'image___childMdx___headings___depth',
  image___childMdx___html = 'image___childMdx___html',
  image___childMdx___mdxAST = 'image___childMdx___mdxAST',
  image___childMdx___tableOfContents = 'image___childMdx___tableOfContents',
  image___childMdx___timeToRead = 'image___childMdx___timeToRead',
  image___childMdx___wordCount___paragraphs = 'image___childMdx___wordCount___paragraphs',
  image___childMdx___wordCount___sentences = 'image___childMdx___wordCount___sentences',
  image___childMdx___wordCount___words = 'image___childMdx___wordCount___words',
  image___childMdx___fields___description = 'image___childMdx___fields___description',
  image___childMdx___fields___commentsStatus = 'image___childMdx___fields___commentsStatus',
  image___childMdx___fields___slug = 'image___childMdx___fields___slug',
  image___childMdx___fields___projectId = 'image___childMdx___fields___projectId',
  image___childMdx___childrenMdxBlogPost = 'image___childMdx___childrenMdxBlogPost',
  image___childMdx___childrenMdxBlogPost___id = 'image___childMdx___childrenMdxBlogPost___id',
  image___childMdx___childrenMdxBlogPost___title = 'image___childMdx___childrenMdxBlogPost___title',
  image___childMdx___childrenMdxBlogPost___slug = 'image___childMdx___childrenMdxBlogPost___slug',
  image___childMdx___childrenMdxBlogPost___date = 'image___childMdx___childrenMdxBlogPost___date',
  image___childMdx___childrenMdxBlogPost___tags = 'image___childMdx___childrenMdxBlogPost___tags',
  image___childMdx___childrenMdxBlogPost___excerpt = 'image___childMdx___childrenMdxBlogPost___excerpt',
  image___childMdx___childrenMdxBlogPost___imageAlt = 'image___childMdx___childrenMdxBlogPost___imageAlt',
  image___childMdx___childrenMdxBlogPost___imageCaptionText = 'image___childMdx___childrenMdxBlogPost___imageCaptionText',
  image___childMdx___childrenMdxBlogPost___imageCaptionLink = 'image___childMdx___childrenMdxBlogPost___imageCaptionLink',
  image___childMdx___childrenMdxBlogPost___body = 'image___childMdx___childrenMdxBlogPost___body',
  image___childMdx___childrenMdxBlogPost___children = 'image___childMdx___childrenMdxBlogPost___children',
  image___childMdx___childMdxBlogPost___id = 'image___childMdx___childMdxBlogPost___id',
  image___childMdx___childMdxBlogPost___title = 'image___childMdx___childMdxBlogPost___title',
  image___childMdx___childMdxBlogPost___slug = 'image___childMdx___childMdxBlogPost___slug',
  image___childMdx___childMdxBlogPost___date = 'image___childMdx___childMdxBlogPost___date',
  image___childMdx___childMdxBlogPost___tags = 'image___childMdx___childMdxBlogPost___tags',
  image___childMdx___childMdxBlogPost___excerpt = 'image___childMdx___childMdxBlogPost___excerpt',
  image___childMdx___childMdxBlogPost___imageAlt = 'image___childMdx___childMdxBlogPost___imageAlt',
  image___childMdx___childMdxBlogPost___imageCaptionText = 'image___childMdx___childMdxBlogPost___imageCaptionText',
  image___childMdx___childMdxBlogPost___imageCaptionLink = 'image___childMdx___childMdxBlogPost___imageCaptionLink',
  image___childMdx___childMdxBlogPost___body = 'image___childMdx___childMdxBlogPost___body',
  image___childMdx___childMdxBlogPost___children = 'image___childMdx___childMdxBlogPost___children',
  image___childMdx___childrenSidebar = 'image___childMdx___childrenSidebar',
  image___childMdx___childrenSidebar___id = 'image___childMdx___childrenSidebar___id',
  image___childMdx___childrenSidebar___children = 'image___childMdx___childrenSidebar___children',
  image___childMdx___childrenSidebar___slug = 'image___childMdx___childrenSidebar___slug',
  image___childMdx___childrenSidebar___title = 'image___childMdx___childrenSidebar___title',
  image___childMdx___childSidebar___id = 'image___childMdx___childSidebar___id',
  image___childMdx___childSidebar___children = 'image___childMdx___childSidebar___children',
  image___childMdx___childSidebar___slug = 'image___childMdx___childSidebar___slug',
  image___childMdx___childSidebar___title = 'image___childMdx___childSidebar___title',
  image___childMdx___childrenProject = 'image___childMdx___childrenProject',
  image___childMdx___childrenProject___id = 'image___childMdx___childrenProject___id',
  image___childMdx___childrenProject___children = 'image___childMdx___childrenProject___children',
  image___childMdx___childrenProject___projectId = 'image___childMdx___childrenProject___projectId',
  image___childMdx___childrenProject___slug = 'image___childMdx___childrenProject___slug',
  image___childMdx___childrenProject___title = 'image___childMdx___childrenProject___title',
  image___childMdx___childProject___id = 'image___childMdx___childProject___id',
  image___childMdx___childProject___children = 'image___childMdx___childProject___children',
  image___childMdx___childProject___projectId = 'image___childMdx___childProject___projectId',
  image___childMdx___childProject___slug = 'image___childMdx___childProject___slug',
  image___childMdx___childProject___title = 'image___childMdx___childProject___title',
  image___childMdx___id = 'image___childMdx___id',
  image___childMdx___parent___id = 'image___childMdx___parent___id',
  image___childMdx___parent___children = 'image___childMdx___parent___children',
  image___childMdx___children = 'image___childMdx___children',
  image___childMdx___children___id = 'image___childMdx___children___id',
  image___childMdx___children___children = 'image___childMdx___children___children',
  image___childMdx___internal___content = 'image___childMdx___internal___content',
  image___childMdx___internal___contentDigest = 'image___childMdx___internal___contentDigest',
  image___childMdx___internal___description = 'image___childMdx___internal___description',
  image___childMdx___internal___fieldOwners = 'image___childMdx___internal___fieldOwners',
  image___childMdx___internal___ignoreType = 'image___childMdx___internal___ignoreType',
  image___childMdx___internal___mediaType = 'image___childMdx___internal___mediaType',
  image___childMdx___internal___owner = 'image___childMdx___internal___owner',
  image___childMdx___internal___type = 'image___childMdx___internal___type',
  image___childrenImageSharp = 'image___childrenImageSharp',
  image___childrenImageSharp___fixed___base64 = 'image___childrenImageSharp___fixed___base64',
  image___childrenImageSharp___fixed___tracedSVG = 'image___childrenImageSharp___fixed___tracedSVG',
  image___childrenImageSharp___fixed___aspectRatio = 'image___childrenImageSharp___fixed___aspectRatio',
  image___childrenImageSharp___fixed___width = 'image___childrenImageSharp___fixed___width',
  image___childrenImageSharp___fixed___height = 'image___childrenImageSharp___fixed___height',
  image___childrenImageSharp___fixed___src = 'image___childrenImageSharp___fixed___src',
  image___childrenImageSharp___fixed___srcSet = 'image___childrenImageSharp___fixed___srcSet',
  image___childrenImageSharp___fixed___srcWebp = 'image___childrenImageSharp___fixed___srcWebp',
  image___childrenImageSharp___fixed___srcSetWebp = 'image___childrenImageSharp___fixed___srcSetWebp',
  image___childrenImageSharp___fixed___originalName = 'image___childrenImageSharp___fixed___originalName',
  image___childrenImageSharp___fluid___base64 = 'image___childrenImageSharp___fluid___base64',
  image___childrenImageSharp___fluid___tracedSVG = 'image___childrenImageSharp___fluid___tracedSVG',
  image___childrenImageSharp___fluid___aspectRatio = 'image___childrenImageSharp___fluid___aspectRatio',
  image___childrenImageSharp___fluid___src = 'image___childrenImageSharp___fluid___src',
  image___childrenImageSharp___fluid___srcSet = 'image___childrenImageSharp___fluid___srcSet',
  image___childrenImageSharp___fluid___srcWebp = 'image___childrenImageSharp___fluid___srcWebp',
  image___childrenImageSharp___fluid___srcSetWebp = 'image___childrenImageSharp___fluid___srcSetWebp',
  image___childrenImageSharp___fluid___sizes = 'image___childrenImageSharp___fluid___sizes',
  image___childrenImageSharp___fluid___originalImg = 'image___childrenImageSharp___fluid___originalImg',
  image___childrenImageSharp___fluid___originalName = 'image___childrenImageSharp___fluid___originalName',
  image___childrenImageSharp___fluid___presentationWidth = 'image___childrenImageSharp___fluid___presentationWidth',
  image___childrenImageSharp___fluid___presentationHeight = 'image___childrenImageSharp___fluid___presentationHeight',
  image___childrenImageSharp___gatsbyImageData = 'image___childrenImageSharp___gatsbyImageData',
  image___childrenImageSharp___original___width = 'image___childrenImageSharp___original___width',
  image___childrenImageSharp___original___height = 'image___childrenImageSharp___original___height',
  image___childrenImageSharp___original___src = 'image___childrenImageSharp___original___src',
  image___childrenImageSharp___resize___src = 'image___childrenImageSharp___resize___src',
  image___childrenImageSharp___resize___tracedSVG = 'image___childrenImageSharp___resize___tracedSVG',
  image___childrenImageSharp___resize___width = 'image___childrenImageSharp___resize___width',
  image___childrenImageSharp___resize___height = 'image___childrenImageSharp___resize___height',
  image___childrenImageSharp___resize___aspectRatio = 'image___childrenImageSharp___resize___aspectRatio',
  image___childrenImageSharp___resize___originalName = 'image___childrenImageSharp___resize___originalName',
  image___childrenImageSharp___id = 'image___childrenImageSharp___id',
  image___childrenImageSharp___parent___id = 'image___childrenImageSharp___parent___id',
  image___childrenImageSharp___parent___children = 'image___childrenImageSharp___parent___children',
  image___childrenImageSharp___children = 'image___childrenImageSharp___children',
  image___childrenImageSharp___children___id = 'image___childrenImageSharp___children___id',
  image___childrenImageSharp___children___children = 'image___childrenImageSharp___children___children',
  image___childrenImageSharp___internal___content = 'image___childrenImageSharp___internal___content',
  image___childrenImageSharp___internal___contentDigest = 'image___childrenImageSharp___internal___contentDigest',
  image___childrenImageSharp___internal___description = 'image___childrenImageSharp___internal___description',
  image___childrenImageSharp___internal___fieldOwners = 'image___childrenImageSharp___internal___fieldOwners',
  image___childrenImageSharp___internal___ignoreType = 'image___childrenImageSharp___internal___ignoreType',
  image___childrenImageSharp___internal___mediaType = 'image___childrenImageSharp___internal___mediaType',
  image___childrenImageSharp___internal___owner = 'image___childrenImageSharp___internal___owner',
  image___childrenImageSharp___internal___type = 'image___childrenImageSharp___internal___type',
  image___childImageSharp___fixed___base64 = 'image___childImageSharp___fixed___base64',
  image___childImageSharp___fixed___tracedSVG = 'image___childImageSharp___fixed___tracedSVG',
  image___childImageSharp___fixed___aspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  image___childImageSharp___fixed___width = 'image___childImageSharp___fixed___width',
  image___childImageSharp___fixed___height = 'image___childImageSharp___fixed___height',
  image___childImageSharp___fixed___src = 'image___childImageSharp___fixed___src',
  image___childImageSharp___fixed___srcSet = 'image___childImageSharp___fixed___srcSet',
  image___childImageSharp___fixed___srcWebp = 'image___childImageSharp___fixed___srcWebp',
  image___childImageSharp___fixed___srcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  image___childImageSharp___fixed___originalName = 'image___childImageSharp___fixed___originalName',
  image___childImageSharp___fluid___base64 = 'image___childImageSharp___fluid___base64',
  image___childImageSharp___fluid___tracedSVG = 'image___childImageSharp___fluid___tracedSVG',
  image___childImageSharp___fluid___aspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  image___childImageSharp___fluid___src = 'image___childImageSharp___fluid___src',
  image___childImageSharp___fluid___srcSet = 'image___childImageSharp___fluid___srcSet',
  image___childImageSharp___fluid___srcWebp = 'image___childImageSharp___fluid___srcWebp',
  image___childImageSharp___fluid___srcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  image___childImageSharp___fluid___sizes = 'image___childImageSharp___fluid___sizes',
  image___childImageSharp___fluid___originalImg = 'image___childImageSharp___fluid___originalImg',
  image___childImageSharp___fluid___originalName = 'image___childImageSharp___fluid___originalName',
  image___childImageSharp___fluid___presentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  image___childImageSharp___fluid___presentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  image___childImageSharp___gatsbyImageData = 'image___childImageSharp___gatsbyImageData',
  image___childImageSharp___original___width = 'image___childImageSharp___original___width',
  image___childImageSharp___original___height = 'image___childImageSharp___original___height',
  image___childImageSharp___original___src = 'image___childImageSharp___original___src',
  image___childImageSharp___resize___src = 'image___childImageSharp___resize___src',
  image___childImageSharp___resize___tracedSVG = 'image___childImageSharp___resize___tracedSVG',
  image___childImageSharp___resize___width = 'image___childImageSharp___resize___width',
  image___childImageSharp___resize___height = 'image___childImageSharp___resize___height',
  image___childImageSharp___resize___aspectRatio = 'image___childImageSharp___resize___aspectRatio',
  image___childImageSharp___resize___originalName = 'image___childImageSharp___resize___originalName',
  image___childImageSharp___id = 'image___childImageSharp___id',
  image___childImageSharp___parent___id = 'image___childImageSharp___parent___id',
  image___childImageSharp___parent___children = 'image___childImageSharp___parent___children',
  image___childImageSharp___children = 'image___childImageSharp___children',
  image___childImageSharp___children___id = 'image___childImageSharp___children___id',
  image___childImageSharp___children___children = 'image___childImageSharp___children___children',
  image___childImageSharp___internal___content = 'image___childImageSharp___internal___content',
  image___childImageSharp___internal___contentDigest = 'image___childImageSharp___internal___contentDigest',
  image___childImageSharp___internal___description = 'image___childImageSharp___internal___description',
  image___childImageSharp___internal___fieldOwners = 'image___childImageSharp___internal___fieldOwners',
  image___childImageSharp___internal___ignoreType = 'image___childImageSharp___internal___ignoreType',
  image___childImageSharp___internal___mediaType = 'image___childImageSharp___internal___mediaType',
  image___childImageSharp___internal___owner = 'image___childImageSharp___internal___owner',
  image___childImageSharp___internal___type = 'image___childImageSharp___internal___type',
  image___id = 'image___id',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  imageAlt = 'imageAlt',
  imageCaptionText = 'imageCaptionText',
  imageCaptionLink = 'imageCaptionLink',
  socialImage___sourceInstanceName = 'socialImage___sourceInstanceName',
  socialImage___absolutePath = 'socialImage___absolutePath',
  socialImage___relativePath = 'socialImage___relativePath',
  socialImage___extension = 'socialImage___extension',
  socialImage___size = 'socialImage___size',
  socialImage___prettySize = 'socialImage___prettySize',
  socialImage___modifiedTime = 'socialImage___modifiedTime',
  socialImage___accessTime = 'socialImage___accessTime',
  socialImage___changeTime = 'socialImage___changeTime',
  socialImage___birthTime = 'socialImage___birthTime',
  socialImage___root = 'socialImage___root',
  socialImage___dir = 'socialImage___dir',
  socialImage___base = 'socialImage___base',
  socialImage___ext = 'socialImage___ext',
  socialImage___name = 'socialImage___name',
  socialImage___relativeDirectory = 'socialImage___relativeDirectory',
  socialImage___dev = 'socialImage___dev',
  socialImage___mode = 'socialImage___mode',
  socialImage___nlink = 'socialImage___nlink',
  socialImage___uid = 'socialImage___uid',
  socialImage___gid = 'socialImage___gid',
  socialImage___rdev = 'socialImage___rdev',
  socialImage___ino = 'socialImage___ino',
  socialImage___atimeMs = 'socialImage___atimeMs',
  socialImage___mtimeMs = 'socialImage___mtimeMs',
  socialImage___ctimeMs = 'socialImage___ctimeMs',
  socialImage___atime = 'socialImage___atime',
  socialImage___mtime = 'socialImage___mtime',
  socialImage___ctime = 'socialImage___ctime',
  socialImage___birthtime = 'socialImage___birthtime',
  socialImage___birthtimeMs = 'socialImage___birthtimeMs',
  socialImage___blksize = 'socialImage___blksize',
  socialImage___blocks = 'socialImage___blocks',
  socialImage___publicURL = 'socialImage___publicURL',
  socialImage___childrenMdx = 'socialImage___childrenMdx',
  socialImage___childrenMdx___rawBody = 'socialImage___childrenMdx___rawBody',
  socialImage___childrenMdx___fileAbsolutePath = 'socialImage___childrenMdx___fileAbsolutePath',
  socialImage___childrenMdx___frontmatter___title = 'socialImage___childrenMdx___frontmatter___title',
  socialImage___childrenMdx___frontmatter___description = 'socialImage___childrenMdx___frontmatter___description',
  socialImage___childrenMdx___frontmatter___sidebar = 'socialImage___childrenMdx___frontmatter___sidebar',
  socialImage___childrenMdx___frontmatter___status = 'socialImage___childrenMdx___frontmatter___status',
  socialImage___childrenMdx___frontmatter___license = 'socialImage___childrenMdx___frontmatter___license',
  socialImage___childrenMdx___frontmatter___path = 'socialImage___childrenMdx___frontmatter___path',
  socialImage___childrenMdx___frontmatter___date = 'socialImage___childrenMdx___frontmatter___date',
  socialImage___childrenMdx___frontmatter___project = 'socialImage___childrenMdx___frontmatter___project',
  socialImage___childrenMdx___frontmatter___comments = 'socialImage___childrenMdx___frontmatter___comments',
  socialImage___childrenMdx___frontmatter___projects = 'socialImage___childrenMdx___frontmatter___projects',
  socialImage___childrenMdx___frontmatter___tags = 'socialImage___childrenMdx___frontmatter___tags',
  socialImage___childrenMdx___slug = 'socialImage___childrenMdx___slug',
  socialImage___childrenMdx___body = 'socialImage___childrenMdx___body',
  socialImage___childrenMdx___excerpt = 'socialImage___childrenMdx___excerpt',
  socialImage___childrenMdx___headings = 'socialImage___childrenMdx___headings',
  socialImage___childrenMdx___headings___value = 'socialImage___childrenMdx___headings___value',
  socialImage___childrenMdx___headings___depth = 'socialImage___childrenMdx___headings___depth',
  socialImage___childrenMdx___html = 'socialImage___childrenMdx___html',
  socialImage___childrenMdx___mdxAST = 'socialImage___childrenMdx___mdxAST',
  socialImage___childrenMdx___tableOfContents = 'socialImage___childrenMdx___tableOfContents',
  socialImage___childrenMdx___timeToRead = 'socialImage___childrenMdx___timeToRead',
  socialImage___childrenMdx___wordCount___paragraphs = 'socialImage___childrenMdx___wordCount___paragraphs',
  socialImage___childrenMdx___wordCount___sentences = 'socialImage___childrenMdx___wordCount___sentences',
  socialImage___childrenMdx___wordCount___words = 'socialImage___childrenMdx___wordCount___words',
  socialImage___childrenMdx___fields___description = 'socialImage___childrenMdx___fields___description',
  socialImage___childrenMdx___fields___commentsStatus = 'socialImage___childrenMdx___fields___commentsStatus',
  socialImage___childrenMdx___fields___slug = 'socialImage___childrenMdx___fields___slug',
  socialImage___childrenMdx___fields___projectId = 'socialImage___childrenMdx___fields___projectId',
  socialImage___childrenMdx___childrenMdxBlogPost = 'socialImage___childrenMdx___childrenMdxBlogPost',
  socialImage___childrenMdx___childrenMdxBlogPost___id = 'socialImage___childrenMdx___childrenMdxBlogPost___id',
  socialImage___childrenMdx___childrenMdxBlogPost___title = 'socialImage___childrenMdx___childrenMdxBlogPost___title',
  socialImage___childrenMdx___childrenMdxBlogPost___slug = 'socialImage___childrenMdx___childrenMdxBlogPost___slug',
  socialImage___childrenMdx___childrenMdxBlogPost___date = 'socialImage___childrenMdx___childrenMdxBlogPost___date',
  socialImage___childrenMdx___childrenMdxBlogPost___tags = 'socialImage___childrenMdx___childrenMdxBlogPost___tags',
  socialImage___childrenMdx___childrenMdxBlogPost___excerpt = 'socialImage___childrenMdx___childrenMdxBlogPost___excerpt',
  socialImage___childrenMdx___childrenMdxBlogPost___imageAlt = 'socialImage___childrenMdx___childrenMdxBlogPost___imageAlt',
  socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionText = 'socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionText',
  socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionLink = 'socialImage___childrenMdx___childrenMdxBlogPost___imageCaptionLink',
  socialImage___childrenMdx___childrenMdxBlogPost___body = 'socialImage___childrenMdx___childrenMdxBlogPost___body',
  socialImage___childrenMdx___childrenMdxBlogPost___children = 'socialImage___childrenMdx___childrenMdxBlogPost___children',
  socialImage___childrenMdx___childMdxBlogPost___id = 'socialImage___childrenMdx___childMdxBlogPost___id',
  socialImage___childrenMdx___childMdxBlogPost___title = 'socialImage___childrenMdx___childMdxBlogPost___title',
  socialImage___childrenMdx___childMdxBlogPost___slug = 'socialImage___childrenMdx___childMdxBlogPost___slug',
  socialImage___childrenMdx___childMdxBlogPost___date = 'socialImage___childrenMdx___childMdxBlogPost___date',
  socialImage___childrenMdx___childMdxBlogPost___tags = 'socialImage___childrenMdx___childMdxBlogPost___tags',
  socialImage___childrenMdx___childMdxBlogPost___excerpt = 'socialImage___childrenMdx___childMdxBlogPost___excerpt',
  socialImage___childrenMdx___childMdxBlogPost___imageAlt = 'socialImage___childrenMdx___childMdxBlogPost___imageAlt',
  socialImage___childrenMdx___childMdxBlogPost___imageCaptionText = 'socialImage___childrenMdx___childMdxBlogPost___imageCaptionText',
  socialImage___childrenMdx___childMdxBlogPost___imageCaptionLink = 'socialImage___childrenMdx___childMdxBlogPost___imageCaptionLink',
  socialImage___childrenMdx___childMdxBlogPost___body = 'socialImage___childrenMdx___childMdxBlogPost___body',
  socialImage___childrenMdx___childMdxBlogPost___children = 'socialImage___childrenMdx___childMdxBlogPost___children',
  socialImage___childrenMdx___childrenSidebar = 'socialImage___childrenMdx___childrenSidebar',
  socialImage___childrenMdx___childrenSidebar___id = 'socialImage___childrenMdx___childrenSidebar___id',
  socialImage___childrenMdx___childrenSidebar___children = 'socialImage___childrenMdx___childrenSidebar___children',
  socialImage___childrenMdx___childrenSidebar___slug = 'socialImage___childrenMdx___childrenSidebar___slug',
  socialImage___childrenMdx___childrenSidebar___title = 'socialImage___childrenMdx___childrenSidebar___title',
  socialImage___childrenMdx___childSidebar___id = 'socialImage___childrenMdx___childSidebar___id',
  socialImage___childrenMdx___childSidebar___children = 'socialImage___childrenMdx___childSidebar___children',
  socialImage___childrenMdx___childSidebar___slug = 'socialImage___childrenMdx___childSidebar___slug',
  socialImage___childrenMdx___childSidebar___title = 'socialImage___childrenMdx___childSidebar___title',
  socialImage___childrenMdx___childrenProject = 'socialImage___childrenMdx___childrenProject',
  socialImage___childrenMdx___childrenProject___id = 'socialImage___childrenMdx___childrenProject___id',
  socialImage___childrenMdx___childrenProject___children = 'socialImage___childrenMdx___childrenProject___children',
  socialImage___childrenMdx___childrenProject___projectId = 'socialImage___childrenMdx___childrenProject___projectId',
  socialImage___childrenMdx___childrenProject___slug = 'socialImage___childrenMdx___childrenProject___slug',
  socialImage___childrenMdx___childrenProject___title = 'socialImage___childrenMdx___childrenProject___title',
  socialImage___childrenMdx___childProject___id = 'socialImage___childrenMdx___childProject___id',
  socialImage___childrenMdx___childProject___children = 'socialImage___childrenMdx___childProject___children',
  socialImage___childrenMdx___childProject___projectId = 'socialImage___childrenMdx___childProject___projectId',
  socialImage___childrenMdx___childProject___slug = 'socialImage___childrenMdx___childProject___slug',
  socialImage___childrenMdx___childProject___title = 'socialImage___childrenMdx___childProject___title',
  socialImage___childrenMdx___id = 'socialImage___childrenMdx___id',
  socialImage___childrenMdx___parent___id = 'socialImage___childrenMdx___parent___id',
  socialImage___childrenMdx___parent___children = 'socialImage___childrenMdx___parent___children',
  socialImage___childrenMdx___children = 'socialImage___childrenMdx___children',
  socialImage___childrenMdx___children___id = 'socialImage___childrenMdx___children___id',
  socialImage___childrenMdx___children___children = 'socialImage___childrenMdx___children___children',
  socialImage___childrenMdx___internal___content = 'socialImage___childrenMdx___internal___content',
  socialImage___childrenMdx___internal___contentDigest = 'socialImage___childrenMdx___internal___contentDigest',
  socialImage___childrenMdx___internal___description = 'socialImage___childrenMdx___internal___description',
  socialImage___childrenMdx___internal___fieldOwners = 'socialImage___childrenMdx___internal___fieldOwners',
  socialImage___childrenMdx___internal___ignoreType = 'socialImage___childrenMdx___internal___ignoreType',
  socialImage___childrenMdx___internal___mediaType = 'socialImage___childrenMdx___internal___mediaType',
  socialImage___childrenMdx___internal___owner = 'socialImage___childrenMdx___internal___owner',
  socialImage___childrenMdx___internal___type = 'socialImage___childrenMdx___internal___type',
  socialImage___childMdx___rawBody = 'socialImage___childMdx___rawBody',
  socialImage___childMdx___fileAbsolutePath = 'socialImage___childMdx___fileAbsolutePath',
  socialImage___childMdx___frontmatter___title = 'socialImage___childMdx___frontmatter___title',
  socialImage___childMdx___frontmatter___description = 'socialImage___childMdx___frontmatter___description',
  socialImage___childMdx___frontmatter___sidebar = 'socialImage___childMdx___frontmatter___sidebar',
  socialImage___childMdx___frontmatter___status = 'socialImage___childMdx___frontmatter___status',
  socialImage___childMdx___frontmatter___license = 'socialImage___childMdx___frontmatter___license',
  socialImage___childMdx___frontmatter___path = 'socialImage___childMdx___frontmatter___path',
  socialImage___childMdx___frontmatter___date = 'socialImage___childMdx___frontmatter___date',
  socialImage___childMdx___frontmatter___project = 'socialImage___childMdx___frontmatter___project',
  socialImage___childMdx___frontmatter___comments = 'socialImage___childMdx___frontmatter___comments',
  socialImage___childMdx___frontmatter___projects = 'socialImage___childMdx___frontmatter___projects',
  socialImage___childMdx___frontmatter___tags = 'socialImage___childMdx___frontmatter___tags',
  socialImage___childMdx___slug = 'socialImage___childMdx___slug',
  socialImage___childMdx___body = 'socialImage___childMdx___body',
  socialImage___childMdx___excerpt = 'socialImage___childMdx___excerpt',
  socialImage___childMdx___headings = 'socialImage___childMdx___headings',
  socialImage___childMdx___headings___value = 'socialImage___childMdx___headings___value',
  socialImage___childMdx___headings___depth = 'socialImage___childMdx___headings___depth',
  socialImage___childMdx___html = 'socialImage___childMdx___html',
  socialImage___childMdx___mdxAST = 'socialImage___childMdx___mdxAST',
  socialImage___childMdx___tableOfContents = 'socialImage___childMdx___tableOfContents',
  socialImage___childMdx___timeToRead = 'socialImage___childMdx___timeToRead',
  socialImage___childMdx___wordCount___paragraphs = 'socialImage___childMdx___wordCount___paragraphs',
  socialImage___childMdx___wordCount___sentences = 'socialImage___childMdx___wordCount___sentences',
  socialImage___childMdx___wordCount___words = 'socialImage___childMdx___wordCount___words',
  socialImage___childMdx___fields___description = 'socialImage___childMdx___fields___description',
  socialImage___childMdx___fields___commentsStatus = 'socialImage___childMdx___fields___commentsStatus',
  socialImage___childMdx___fields___slug = 'socialImage___childMdx___fields___slug',
  socialImage___childMdx___fields___projectId = 'socialImage___childMdx___fields___projectId',
  socialImage___childMdx___childrenMdxBlogPost = 'socialImage___childMdx___childrenMdxBlogPost',
  socialImage___childMdx___childrenMdxBlogPost___id = 'socialImage___childMdx___childrenMdxBlogPost___id',
  socialImage___childMdx___childrenMdxBlogPost___title = 'socialImage___childMdx___childrenMdxBlogPost___title',
  socialImage___childMdx___childrenMdxBlogPost___slug = 'socialImage___childMdx___childrenMdxBlogPost___slug',
  socialImage___childMdx___childrenMdxBlogPost___date = 'socialImage___childMdx___childrenMdxBlogPost___date',
  socialImage___childMdx___childrenMdxBlogPost___tags = 'socialImage___childMdx___childrenMdxBlogPost___tags',
  socialImage___childMdx___childrenMdxBlogPost___excerpt = 'socialImage___childMdx___childrenMdxBlogPost___excerpt',
  socialImage___childMdx___childrenMdxBlogPost___imageAlt = 'socialImage___childMdx___childrenMdxBlogPost___imageAlt',
  socialImage___childMdx___childrenMdxBlogPost___imageCaptionText = 'socialImage___childMdx___childrenMdxBlogPost___imageCaptionText',
  socialImage___childMdx___childrenMdxBlogPost___imageCaptionLink = 'socialImage___childMdx___childrenMdxBlogPost___imageCaptionLink',
  socialImage___childMdx___childrenMdxBlogPost___body = 'socialImage___childMdx___childrenMdxBlogPost___body',
  socialImage___childMdx___childrenMdxBlogPost___children = 'socialImage___childMdx___childrenMdxBlogPost___children',
  socialImage___childMdx___childMdxBlogPost___id = 'socialImage___childMdx___childMdxBlogPost___id',
  socialImage___childMdx___childMdxBlogPost___title = 'socialImage___childMdx___childMdxBlogPost___title',
  socialImage___childMdx___childMdxBlogPost___slug = 'socialImage___childMdx___childMdxBlogPost___slug',
  socialImage___childMdx___childMdxBlogPost___date = 'socialImage___childMdx___childMdxBlogPost___date',
  socialImage___childMdx___childMdxBlogPost___tags = 'socialImage___childMdx___childMdxBlogPost___tags',
  socialImage___childMdx___childMdxBlogPost___excerpt = 'socialImage___childMdx___childMdxBlogPost___excerpt',
  socialImage___childMdx___childMdxBlogPost___imageAlt = 'socialImage___childMdx___childMdxBlogPost___imageAlt',
  socialImage___childMdx___childMdxBlogPost___imageCaptionText = 'socialImage___childMdx___childMdxBlogPost___imageCaptionText',
  socialImage___childMdx___childMdxBlogPost___imageCaptionLink = 'socialImage___childMdx___childMdxBlogPost___imageCaptionLink',
  socialImage___childMdx___childMdxBlogPost___body = 'socialImage___childMdx___childMdxBlogPost___body',
  socialImage___childMdx___childMdxBlogPost___children = 'socialImage___childMdx___childMdxBlogPost___children',
  socialImage___childMdx___childrenSidebar = 'socialImage___childMdx___childrenSidebar',
  socialImage___childMdx___childrenSidebar___id = 'socialImage___childMdx___childrenSidebar___id',
  socialImage___childMdx___childrenSidebar___children = 'socialImage___childMdx___childrenSidebar___children',
  socialImage___childMdx___childrenSidebar___slug = 'socialImage___childMdx___childrenSidebar___slug',
  socialImage___childMdx___childrenSidebar___title = 'socialImage___childMdx___childrenSidebar___title',
  socialImage___childMdx___childSidebar___id = 'socialImage___childMdx___childSidebar___id',
  socialImage___childMdx___childSidebar___children = 'socialImage___childMdx___childSidebar___children',
  socialImage___childMdx___childSidebar___slug = 'socialImage___childMdx___childSidebar___slug',
  socialImage___childMdx___childSidebar___title = 'socialImage___childMdx___childSidebar___title',
  socialImage___childMdx___childrenProject = 'socialImage___childMdx___childrenProject',
  socialImage___childMdx___childrenProject___id = 'socialImage___childMdx___childrenProject___id',
  socialImage___childMdx___childrenProject___children = 'socialImage___childMdx___childrenProject___children',
  socialImage___childMdx___childrenProject___projectId = 'socialImage___childMdx___childrenProject___projectId',
  socialImage___childMdx___childrenProject___slug = 'socialImage___childMdx___childrenProject___slug',
  socialImage___childMdx___childrenProject___title = 'socialImage___childMdx___childrenProject___title',
  socialImage___childMdx___childProject___id = 'socialImage___childMdx___childProject___id',
  socialImage___childMdx___childProject___children = 'socialImage___childMdx___childProject___children',
  socialImage___childMdx___childProject___projectId = 'socialImage___childMdx___childProject___projectId',
  socialImage___childMdx___childProject___slug = 'socialImage___childMdx___childProject___slug',
  socialImage___childMdx___childProject___title = 'socialImage___childMdx___childProject___title',
  socialImage___childMdx___id = 'socialImage___childMdx___id',
  socialImage___childMdx___parent___id = 'socialImage___childMdx___parent___id',
  socialImage___childMdx___parent___children = 'socialImage___childMdx___parent___children',
  socialImage___childMdx___children = 'socialImage___childMdx___children',
  socialImage___childMdx___children___id = 'socialImage___childMdx___children___id',
  socialImage___childMdx___children___children = 'socialImage___childMdx___children___children',
  socialImage___childMdx___internal___content = 'socialImage___childMdx___internal___content',
  socialImage___childMdx___internal___contentDigest = 'socialImage___childMdx___internal___contentDigest',
  socialImage___childMdx___internal___description = 'socialImage___childMdx___internal___description',
  socialImage___childMdx___internal___fieldOwners = 'socialImage___childMdx___internal___fieldOwners',
  socialImage___childMdx___internal___ignoreType = 'socialImage___childMdx___internal___ignoreType',
  socialImage___childMdx___internal___mediaType = 'socialImage___childMdx___internal___mediaType',
  socialImage___childMdx___internal___owner = 'socialImage___childMdx___internal___owner',
  socialImage___childMdx___internal___type = 'socialImage___childMdx___internal___type',
  socialImage___childrenImageSharp = 'socialImage___childrenImageSharp',
  socialImage___childrenImageSharp___fixed___base64 = 'socialImage___childrenImageSharp___fixed___base64',
  socialImage___childrenImageSharp___fixed___tracedSVG = 'socialImage___childrenImageSharp___fixed___tracedSVG',
  socialImage___childrenImageSharp___fixed___aspectRatio = 'socialImage___childrenImageSharp___fixed___aspectRatio',
  socialImage___childrenImageSharp___fixed___width = 'socialImage___childrenImageSharp___fixed___width',
  socialImage___childrenImageSharp___fixed___height = 'socialImage___childrenImageSharp___fixed___height',
  socialImage___childrenImageSharp___fixed___src = 'socialImage___childrenImageSharp___fixed___src',
  socialImage___childrenImageSharp___fixed___srcSet = 'socialImage___childrenImageSharp___fixed___srcSet',
  socialImage___childrenImageSharp___fixed___srcWebp = 'socialImage___childrenImageSharp___fixed___srcWebp',
  socialImage___childrenImageSharp___fixed___srcSetWebp = 'socialImage___childrenImageSharp___fixed___srcSetWebp',
  socialImage___childrenImageSharp___fixed___originalName = 'socialImage___childrenImageSharp___fixed___originalName',
  socialImage___childrenImageSharp___fluid___base64 = 'socialImage___childrenImageSharp___fluid___base64',
  socialImage___childrenImageSharp___fluid___tracedSVG = 'socialImage___childrenImageSharp___fluid___tracedSVG',
  socialImage___childrenImageSharp___fluid___aspectRatio = 'socialImage___childrenImageSharp___fluid___aspectRatio',
  socialImage___childrenImageSharp___fluid___src = 'socialImage___childrenImageSharp___fluid___src',
  socialImage___childrenImageSharp___fluid___srcSet = 'socialImage___childrenImageSharp___fluid___srcSet',
  socialImage___childrenImageSharp___fluid___srcWebp = 'socialImage___childrenImageSharp___fluid___srcWebp',
  socialImage___childrenImageSharp___fluid___srcSetWebp = 'socialImage___childrenImageSharp___fluid___srcSetWebp',
  socialImage___childrenImageSharp___fluid___sizes = 'socialImage___childrenImageSharp___fluid___sizes',
  socialImage___childrenImageSharp___fluid___originalImg = 'socialImage___childrenImageSharp___fluid___originalImg',
  socialImage___childrenImageSharp___fluid___originalName = 'socialImage___childrenImageSharp___fluid___originalName',
  socialImage___childrenImageSharp___fluid___presentationWidth = 'socialImage___childrenImageSharp___fluid___presentationWidth',
  socialImage___childrenImageSharp___fluid___presentationHeight = 'socialImage___childrenImageSharp___fluid___presentationHeight',
  socialImage___childrenImageSharp___gatsbyImageData = 'socialImage___childrenImageSharp___gatsbyImageData',
  socialImage___childrenImageSharp___original___width = 'socialImage___childrenImageSharp___original___width',
  socialImage___childrenImageSharp___original___height = 'socialImage___childrenImageSharp___original___height',
  socialImage___childrenImageSharp___original___src = 'socialImage___childrenImageSharp___original___src',
  socialImage___childrenImageSharp___resize___src = 'socialImage___childrenImageSharp___resize___src',
  socialImage___childrenImageSharp___resize___tracedSVG = 'socialImage___childrenImageSharp___resize___tracedSVG',
  socialImage___childrenImageSharp___resize___width = 'socialImage___childrenImageSharp___resize___width',
  socialImage___childrenImageSharp___resize___height = 'socialImage___childrenImageSharp___resize___height',
  socialImage___childrenImageSharp___resize___aspectRatio = 'socialImage___childrenImageSharp___resize___aspectRatio',
  socialImage___childrenImageSharp___resize___originalName = 'socialImage___childrenImageSharp___resize___originalName',
  socialImage___childrenImageSharp___id = 'socialImage___childrenImageSharp___id',
  socialImage___childrenImageSharp___parent___id = 'socialImage___childrenImageSharp___parent___id',
  socialImage___childrenImageSharp___parent___children = 'socialImage___childrenImageSharp___parent___children',
  socialImage___childrenImageSharp___children = 'socialImage___childrenImageSharp___children',
  socialImage___childrenImageSharp___children___id = 'socialImage___childrenImageSharp___children___id',
  socialImage___childrenImageSharp___children___children = 'socialImage___childrenImageSharp___children___children',
  socialImage___childrenImageSharp___internal___content = 'socialImage___childrenImageSharp___internal___content',
  socialImage___childrenImageSharp___internal___contentDigest = 'socialImage___childrenImageSharp___internal___contentDigest',
  socialImage___childrenImageSharp___internal___description = 'socialImage___childrenImageSharp___internal___description',
  socialImage___childrenImageSharp___internal___fieldOwners = 'socialImage___childrenImageSharp___internal___fieldOwners',
  socialImage___childrenImageSharp___internal___ignoreType = 'socialImage___childrenImageSharp___internal___ignoreType',
  socialImage___childrenImageSharp___internal___mediaType = 'socialImage___childrenImageSharp___internal___mediaType',
  socialImage___childrenImageSharp___internal___owner = 'socialImage___childrenImageSharp___internal___owner',
  socialImage___childrenImageSharp___internal___type = 'socialImage___childrenImageSharp___internal___type',
  socialImage___childImageSharp___fixed___base64 = 'socialImage___childImageSharp___fixed___base64',
  socialImage___childImageSharp___fixed___tracedSVG = 'socialImage___childImageSharp___fixed___tracedSVG',
  socialImage___childImageSharp___fixed___aspectRatio = 'socialImage___childImageSharp___fixed___aspectRatio',
  socialImage___childImageSharp___fixed___width = 'socialImage___childImageSharp___fixed___width',
  socialImage___childImageSharp___fixed___height = 'socialImage___childImageSharp___fixed___height',
  socialImage___childImageSharp___fixed___src = 'socialImage___childImageSharp___fixed___src',
  socialImage___childImageSharp___fixed___srcSet = 'socialImage___childImageSharp___fixed___srcSet',
  socialImage___childImageSharp___fixed___srcWebp = 'socialImage___childImageSharp___fixed___srcWebp',
  socialImage___childImageSharp___fixed___srcSetWebp = 'socialImage___childImageSharp___fixed___srcSetWebp',
  socialImage___childImageSharp___fixed___originalName = 'socialImage___childImageSharp___fixed___originalName',
  socialImage___childImageSharp___fluid___base64 = 'socialImage___childImageSharp___fluid___base64',
  socialImage___childImageSharp___fluid___tracedSVG = 'socialImage___childImageSharp___fluid___tracedSVG',
  socialImage___childImageSharp___fluid___aspectRatio = 'socialImage___childImageSharp___fluid___aspectRatio',
  socialImage___childImageSharp___fluid___src = 'socialImage___childImageSharp___fluid___src',
  socialImage___childImageSharp___fluid___srcSet = 'socialImage___childImageSharp___fluid___srcSet',
  socialImage___childImageSharp___fluid___srcWebp = 'socialImage___childImageSharp___fluid___srcWebp',
  socialImage___childImageSharp___fluid___srcSetWebp = 'socialImage___childImageSharp___fluid___srcSetWebp',
  socialImage___childImageSharp___fluid___sizes = 'socialImage___childImageSharp___fluid___sizes',
  socialImage___childImageSharp___fluid___originalImg = 'socialImage___childImageSharp___fluid___originalImg',
  socialImage___childImageSharp___fluid___originalName = 'socialImage___childImageSharp___fluid___originalName',
  socialImage___childImageSharp___fluid___presentationWidth = 'socialImage___childImageSharp___fluid___presentationWidth',
  socialImage___childImageSharp___fluid___presentationHeight = 'socialImage___childImageSharp___fluid___presentationHeight',
  socialImage___childImageSharp___gatsbyImageData = 'socialImage___childImageSharp___gatsbyImageData',
  socialImage___childImageSharp___original___width = 'socialImage___childImageSharp___original___width',
  socialImage___childImageSharp___original___height = 'socialImage___childImageSharp___original___height',
  socialImage___childImageSharp___original___src = 'socialImage___childImageSharp___original___src',
  socialImage___childImageSharp___resize___src = 'socialImage___childImageSharp___resize___src',
  socialImage___childImageSharp___resize___tracedSVG = 'socialImage___childImageSharp___resize___tracedSVG',
  socialImage___childImageSharp___resize___width = 'socialImage___childImageSharp___resize___width',
  socialImage___childImageSharp___resize___height = 'socialImage___childImageSharp___resize___height',
  socialImage___childImageSharp___resize___aspectRatio = 'socialImage___childImageSharp___resize___aspectRatio',
  socialImage___childImageSharp___resize___originalName = 'socialImage___childImageSharp___resize___originalName',
  socialImage___childImageSharp___id = 'socialImage___childImageSharp___id',
  socialImage___childImageSharp___parent___id = 'socialImage___childImageSharp___parent___id',
  socialImage___childImageSharp___parent___children = 'socialImage___childImageSharp___parent___children',
  socialImage___childImageSharp___children = 'socialImage___childImageSharp___children',
  socialImage___childImageSharp___children___id = 'socialImage___childImageSharp___children___id',
  socialImage___childImageSharp___children___children = 'socialImage___childImageSharp___children___children',
  socialImage___childImageSharp___internal___content = 'socialImage___childImageSharp___internal___content',
  socialImage___childImageSharp___internal___contentDigest = 'socialImage___childImageSharp___internal___contentDigest',
  socialImage___childImageSharp___internal___description = 'socialImage___childImageSharp___internal___description',
  socialImage___childImageSharp___internal___fieldOwners = 'socialImage___childImageSharp___internal___fieldOwners',
  socialImage___childImageSharp___internal___ignoreType = 'socialImage___childImageSharp___internal___ignoreType',
  socialImage___childImageSharp___internal___mediaType = 'socialImage___childImageSharp___internal___mediaType',
  socialImage___childImageSharp___internal___owner = 'socialImage___childImageSharp___internal___owner',
  socialImage___childImageSharp___internal___type = 'socialImage___childImageSharp___internal___type',
  socialImage___id = 'socialImage___id',
  socialImage___parent___id = 'socialImage___parent___id',
  socialImage___parent___parent___id = 'socialImage___parent___parent___id',
  socialImage___parent___parent___children = 'socialImage___parent___parent___children',
  socialImage___parent___children = 'socialImage___parent___children',
  socialImage___parent___children___id = 'socialImage___parent___children___id',
  socialImage___parent___children___children = 'socialImage___parent___children___children',
  socialImage___parent___internal___content = 'socialImage___parent___internal___content',
  socialImage___parent___internal___contentDigest = 'socialImage___parent___internal___contentDigest',
  socialImage___parent___internal___description = 'socialImage___parent___internal___description',
  socialImage___parent___internal___fieldOwners = 'socialImage___parent___internal___fieldOwners',
  socialImage___parent___internal___ignoreType = 'socialImage___parent___internal___ignoreType',
  socialImage___parent___internal___mediaType = 'socialImage___parent___internal___mediaType',
  socialImage___parent___internal___owner = 'socialImage___parent___internal___owner',
  socialImage___parent___internal___type = 'socialImage___parent___internal___type',
  socialImage___children = 'socialImage___children',
  socialImage___children___id = 'socialImage___children___id',
  socialImage___children___parent___id = 'socialImage___children___parent___id',
  socialImage___children___parent___children = 'socialImage___children___parent___children',
  socialImage___children___children = 'socialImage___children___children',
  socialImage___children___children___id = 'socialImage___children___children___id',
  socialImage___children___children___children = 'socialImage___children___children___children',
  socialImage___children___internal___content = 'socialImage___children___internal___content',
  socialImage___children___internal___contentDigest = 'socialImage___children___internal___contentDigest',
  socialImage___children___internal___description = 'socialImage___children___internal___description',
  socialImage___children___internal___fieldOwners = 'socialImage___children___internal___fieldOwners',
  socialImage___children___internal___ignoreType = 'socialImage___children___internal___ignoreType',
  socialImage___children___internal___mediaType = 'socialImage___children___internal___mediaType',
  socialImage___children___internal___owner = 'socialImage___children___internal___owner',
  socialImage___children___internal___type = 'socialImage___children___internal___type',
  socialImage___internal___content = 'socialImage___internal___content',
  socialImage___internal___contentDigest = 'socialImage___internal___contentDigest',
  socialImage___internal___description = 'socialImage___internal___description',
  socialImage___internal___fieldOwners = 'socialImage___internal___fieldOwners',
  socialImage___internal___ignoreType = 'socialImage___internal___ignoreType',
  socialImage___internal___mediaType = 'socialImage___internal___mediaType',
  socialImage___internal___owner = 'socialImage___internal___owner',
  socialImage___internal___type = 'socialImage___internal___type',
  body = 'body',
  fields___description = 'fields___description',
  fields___commentsStatus = 'fields___commentsStatus',
  fields___slug = 'fields___slug',
  fields___projectId = 'fields___projectId',
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
  internal___type = 'internal___type'
}

export type MdxBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  imageCaptionText?: Maybe<StringQueryOperatorInput>;
  imageCaptionLink?: Maybe<StringQueryOperatorInput>;
  socialImage?: Maybe<FileFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxBlogPostFilterListInput = {
  elemMatch?: Maybe<MdxBlogPostFilterInput>;
};

export type MdxBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxBlogPostEdge>;
  nodes: Array<MdxBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxBlogPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MdxBlogPostGroupConnectionDistinctArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostGroupConnectionMaxArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostGroupConnectionMinArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostGroupConnectionSumArgs = {
  field: MdxBlogPostFieldsEnum;
};


export type MdxBlogPostGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxBlogPostFieldsEnum;
};

export type MdxBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<MdxBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFields = {
  description?: Maybe<Scalars['String']>;
  commentsStatus?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
};

export enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter___title',
  frontmatter___description = 'frontmatter___description',
  frontmatter___featured_image___childImageSharp___gatsbyImageData = 'frontmatter___featured_image___childImageSharp___gatsbyImageData',
  frontmatter___featured_image___childImageSharp___id = 'frontmatter___featured_image___childImageSharp___id',
  frontmatter___featured_image___childImageSharp___children = 'frontmatter___featured_image___childImageSharp___children',
  frontmatter___sidebar = 'frontmatter___sidebar',
  frontmatter___status = 'frontmatter___status',
  frontmatter___license = 'frontmatter___license',
  frontmatter___path = 'frontmatter___path',
  frontmatter___date = 'frontmatter___date',
  frontmatter___project = 'frontmatter___project',
  frontmatter___comments = 'frontmatter___comments',
  frontmatter___projects = 'frontmatter___projects',
  frontmatter___tags = 'frontmatter___tags',
  slug = 'slug',
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
  fields___description = 'fields___description',
  fields___commentsStatus = 'fields___commentsStatus',
  fields___slug = 'fields___slug',
  fields___projectId = 'fields___projectId',
  childrenMdxBlogPost = 'childrenMdxBlogPost',
  childrenMdxBlogPost___id = 'childrenMdxBlogPost___id',
  childrenMdxBlogPost___title = 'childrenMdxBlogPost___title',
  childrenMdxBlogPost___slug = 'childrenMdxBlogPost___slug',
  childrenMdxBlogPost___date = 'childrenMdxBlogPost___date',
  childrenMdxBlogPost___tags = 'childrenMdxBlogPost___tags',
  childrenMdxBlogPost___excerpt = 'childrenMdxBlogPost___excerpt',
  childrenMdxBlogPost___image___sourceInstanceName = 'childrenMdxBlogPost___image___sourceInstanceName',
  childrenMdxBlogPost___image___absolutePath = 'childrenMdxBlogPost___image___absolutePath',
  childrenMdxBlogPost___image___relativePath = 'childrenMdxBlogPost___image___relativePath',
  childrenMdxBlogPost___image___extension = 'childrenMdxBlogPost___image___extension',
  childrenMdxBlogPost___image___size = 'childrenMdxBlogPost___image___size',
  childrenMdxBlogPost___image___prettySize = 'childrenMdxBlogPost___image___prettySize',
  childrenMdxBlogPost___image___modifiedTime = 'childrenMdxBlogPost___image___modifiedTime',
  childrenMdxBlogPost___image___accessTime = 'childrenMdxBlogPost___image___accessTime',
  childrenMdxBlogPost___image___changeTime = 'childrenMdxBlogPost___image___changeTime',
  childrenMdxBlogPost___image___birthTime = 'childrenMdxBlogPost___image___birthTime',
  childrenMdxBlogPost___image___root = 'childrenMdxBlogPost___image___root',
  childrenMdxBlogPost___image___dir = 'childrenMdxBlogPost___image___dir',
  childrenMdxBlogPost___image___base = 'childrenMdxBlogPost___image___base',
  childrenMdxBlogPost___image___ext = 'childrenMdxBlogPost___image___ext',
  childrenMdxBlogPost___image___name = 'childrenMdxBlogPost___image___name',
  childrenMdxBlogPost___image___relativeDirectory = 'childrenMdxBlogPost___image___relativeDirectory',
  childrenMdxBlogPost___image___dev = 'childrenMdxBlogPost___image___dev',
  childrenMdxBlogPost___image___mode = 'childrenMdxBlogPost___image___mode',
  childrenMdxBlogPost___image___nlink = 'childrenMdxBlogPost___image___nlink',
  childrenMdxBlogPost___image___uid = 'childrenMdxBlogPost___image___uid',
  childrenMdxBlogPost___image___gid = 'childrenMdxBlogPost___image___gid',
  childrenMdxBlogPost___image___rdev = 'childrenMdxBlogPost___image___rdev',
  childrenMdxBlogPost___image___ino = 'childrenMdxBlogPost___image___ino',
  childrenMdxBlogPost___image___atimeMs = 'childrenMdxBlogPost___image___atimeMs',
  childrenMdxBlogPost___image___mtimeMs = 'childrenMdxBlogPost___image___mtimeMs',
  childrenMdxBlogPost___image___ctimeMs = 'childrenMdxBlogPost___image___ctimeMs',
  childrenMdxBlogPost___image___atime = 'childrenMdxBlogPost___image___atime',
  childrenMdxBlogPost___image___mtime = 'childrenMdxBlogPost___image___mtime',
  childrenMdxBlogPost___image___ctime = 'childrenMdxBlogPost___image___ctime',
  childrenMdxBlogPost___image___birthtime = 'childrenMdxBlogPost___image___birthtime',
  childrenMdxBlogPost___image___birthtimeMs = 'childrenMdxBlogPost___image___birthtimeMs',
  childrenMdxBlogPost___image___blksize = 'childrenMdxBlogPost___image___blksize',
  childrenMdxBlogPost___image___blocks = 'childrenMdxBlogPost___image___blocks',
  childrenMdxBlogPost___image___publicURL = 'childrenMdxBlogPost___image___publicURL',
  childrenMdxBlogPost___image___childrenMdx = 'childrenMdxBlogPost___image___childrenMdx',
  childrenMdxBlogPost___image___childrenMdx___rawBody = 'childrenMdxBlogPost___image___childrenMdx___rawBody',
  childrenMdxBlogPost___image___childrenMdx___fileAbsolutePath = 'childrenMdxBlogPost___image___childrenMdx___fileAbsolutePath',
  childrenMdxBlogPost___image___childrenMdx___slug = 'childrenMdxBlogPost___image___childrenMdx___slug',
  childrenMdxBlogPost___image___childrenMdx___body = 'childrenMdxBlogPost___image___childrenMdx___body',
  childrenMdxBlogPost___image___childrenMdx___excerpt = 'childrenMdxBlogPost___image___childrenMdx___excerpt',
  childrenMdxBlogPost___image___childrenMdx___headings = 'childrenMdxBlogPost___image___childrenMdx___headings',
  childrenMdxBlogPost___image___childrenMdx___html = 'childrenMdxBlogPost___image___childrenMdx___html',
  childrenMdxBlogPost___image___childrenMdx___mdxAST = 'childrenMdxBlogPost___image___childrenMdx___mdxAST',
  childrenMdxBlogPost___image___childrenMdx___tableOfContents = 'childrenMdxBlogPost___image___childrenMdx___tableOfContents',
  childrenMdxBlogPost___image___childrenMdx___timeToRead = 'childrenMdxBlogPost___image___childrenMdx___timeToRead',
  childrenMdxBlogPost___image___childrenMdx___childrenMdxBlogPost = 'childrenMdxBlogPost___image___childrenMdx___childrenMdxBlogPost',
  childrenMdxBlogPost___image___childrenMdx___childrenSidebar = 'childrenMdxBlogPost___image___childrenMdx___childrenSidebar',
  childrenMdxBlogPost___image___childrenMdx___childrenProject = 'childrenMdxBlogPost___image___childrenMdx___childrenProject',
  childrenMdxBlogPost___image___childrenMdx___id = 'childrenMdxBlogPost___image___childrenMdx___id',
  childrenMdxBlogPost___image___childrenMdx___children = 'childrenMdxBlogPost___image___childrenMdx___children',
  childrenMdxBlogPost___image___childMdx___rawBody = 'childrenMdxBlogPost___image___childMdx___rawBody',
  childrenMdxBlogPost___image___childMdx___fileAbsolutePath = 'childrenMdxBlogPost___image___childMdx___fileAbsolutePath',
  childrenMdxBlogPost___image___childMdx___slug = 'childrenMdxBlogPost___image___childMdx___slug',
  childrenMdxBlogPost___image___childMdx___body = 'childrenMdxBlogPost___image___childMdx___body',
  childrenMdxBlogPost___image___childMdx___excerpt = 'childrenMdxBlogPost___image___childMdx___excerpt',
  childrenMdxBlogPost___image___childMdx___headings = 'childrenMdxBlogPost___image___childMdx___headings',
  childrenMdxBlogPost___image___childMdx___html = 'childrenMdxBlogPost___image___childMdx___html',
  childrenMdxBlogPost___image___childMdx___mdxAST = 'childrenMdxBlogPost___image___childMdx___mdxAST',
  childrenMdxBlogPost___image___childMdx___tableOfContents = 'childrenMdxBlogPost___image___childMdx___tableOfContents',
  childrenMdxBlogPost___image___childMdx___timeToRead = 'childrenMdxBlogPost___image___childMdx___timeToRead',
  childrenMdxBlogPost___image___childMdx___childrenMdxBlogPost = 'childrenMdxBlogPost___image___childMdx___childrenMdxBlogPost',
  childrenMdxBlogPost___image___childMdx___childrenSidebar = 'childrenMdxBlogPost___image___childMdx___childrenSidebar',
  childrenMdxBlogPost___image___childMdx___childrenProject = 'childrenMdxBlogPost___image___childMdx___childrenProject',
  childrenMdxBlogPost___image___childMdx___id = 'childrenMdxBlogPost___image___childMdx___id',
  childrenMdxBlogPost___image___childMdx___children = 'childrenMdxBlogPost___image___childMdx___children',
  childrenMdxBlogPost___image___childrenImageSharp = 'childrenMdxBlogPost___image___childrenImageSharp',
  childrenMdxBlogPost___image___childrenImageSharp___gatsbyImageData = 'childrenMdxBlogPost___image___childrenImageSharp___gatsbyImageData',
  childrenMdxBlogPost___image___childrenImageSharp___id = 'childrenMdxBlogPost___image___childrenImageSharp___id',
  childrenMdxBlogPost___image___childrenImageSharp___children = 'childrenMdxBlogPost___image___childrenImageSharp___children',
  childrenMdxBlogPost___image___childImageSharp___gatsbyImageData = 'childrenMdxBlogPost___image___childImageSharp___gatsbyImageData',
  childrenMdxBlogPost___image___childImageSharp___id = 'childrenMdxBlogPost___image___childImageSharp___id',
  childrenMdxBlogPost___image___childImageSharp___children = 'childrenMdxBlogPost___image___childImageSharp___children',
  childrenMdxBlogPost___image___id = 'childrenMdxBlogPost___image___id',
  childrenMdxBlogPost___image___parent___id = 'childrenMdxBlogPost___image___parent___id',
  childrenMdxBlogPost___image___parent___children = 'childrenMdxBlogPost___image___parent___children',
  childrenMdxBlogPost___image___children = 'childrenMdxBlogPost___image___children',
  childrenMdxBlogPost___image___children___id = 'childrenMdxBlogPost___image___children___id',
  childrenMdxBlogPost___image___children___children = 'childrenMdxBlogPost___image___children___children',
  childrenMdxBlogPost___image___internal___content = 'childrenMdxBlogPost___image___internal___content',
  childrenMdxBlogPost___image___internal___contentDigest = 'childrenMdxBlogPost___image___internal___contentDigest',
  childrenMdxBlogPost___image___internal___description = 'childrenMdxBlogPost___image___internal___description',
  childrenMdxBlogPost___image___internal___fieldOwners = 'childrenMdxBlogPost___image___internal___fieldOwners',
  childrenMdxBlogPost___image___internal___ignoreType = 'childrenMdxBlogPost___image___internal___ignoreType',
  childrenMdxBlogPost___image___internal___mediaType = 'childrenMdxBlogPost___image___internal___mediaType',
  childrenMdxBlogPost___image___internal___owner = 'childrenMdxBlogPost___image___internal___owner',
  childrenMdxBlogPost___image___internal___type = 'childrenMdxBlogPost___image___internal___type',
  childrenMdxBlogPost___imageAlt = 'childrenMdxBlogPost___imageAlt',
  childrenMdxBlogPost___imageCaptionText = 'childrenMdxBlogPost___imageCaptionText',
  childrenMdxBlogPost___imageCaptionLink = 'childrenMdxBlogPost___imageCaptionLink',
  childrenMdxBlogPost___socialImage___sourceInstanceName = 'childrenMdxBlogPost___socialImage___sourceInstanceName',
  childrenMdxBlogPost___socialImage___absolutePath = 'childrenMdxBlogPost___socialImage___absolutePath',
  childrenMdxBlogPost___socialImage___relativePath = 'childrenMdxBlogPost___socialImage___relativePath',
  childrenMdxBlogPost___socialImage___extension = 'childrenMdxBlogPost___socialImage___extension',
  childrenMdxBlogPost___socialImage___size = 'childrenMdxBlogPost___socialImage___size',
  childrenMdxBlogPost___socialImage___prettySize = 'childrenMdxBlogPost___socialImage___prettySize',
  childrenMdxBlogPost___socialImage___modifiedTime = 'childrenMdxBlogPost___socialImage___modifiedTime',
  childrenMdxBlogPost___socialImage___accessTime = 'childrenMdxBlogPost___socialImage___accessTime',
  childrenMdxBlogPost___socialImage___changeTime = 'childrenMdxBlogPost___socialImage___changeTime',
  childrenMdxBlogPost___socialImage___birthTime = 'childrenMdxBlogPost___socialImage___birthTime',
  childrenMdxBlogPost___socialImage___root = 'childrenMdxBlogPost___socialImage___root',
  childrenMdxBlogPost___socialImage___dir = 'childrenMdxBlogPost___socialImage___dir',
  childrenMdxBlogPost___socialImage___base = 'childrenMdxBlogPost___socialImage___base',
  childrenMdxBlogPost___socialImage___ext = 'childrenMdxBlogPost___socialImage___ext',
  childrenMdxBlogPost___socialImage___name = 'childrenMdxBlogPost___socialImage___name',
  childrenMdxBlogPost___socialImage___relativeDirectory = 'childrenMdxBlogPost___socialImage___relativeDirectory',
  childrenMdxBlogPost___socialImage___dev = 'childrenMdxBlogPost___socialImage___dev',
  childrenMdxBlogPost___socialImage___mode = 'childrenMdxBlogPost___socialImage___mode',
  childrenMdxBlogPost___socialImage___nlink = 'childrenMdxBlogPost___socialImage___nlink',
  childrenMdxBlogPost___socialImage___uid = 'childrenMdxBlogPost___socialImage___uid',
  childrenMdxBlogPost___socialImage___gid = 'childrenMdxBlogPost___socialImage___gid',
  childrenMdxBlogPost___socialImage___rdev = 'childrenMdxBlogPost___socialImage___rdev',
  childrenMdxBlogPost___socialImage___ino = 'childrenMdxBlogPost___socialImage___ino',
  childrenMdxBlogPost___socialImage___atimeMs = 'childrenMdxBlogPost___socialImage___atimeMs',
  childrenMdxBlogPost___socialImage___mtimeMs = 'childrenMdxBlogPost___socialImage___mtimeMs',
  childrenMdxBlogPost___socialImage___ctimeMs = 'childrenMdxBlogPost___socialImage___ctimeMs',
  childrenMdxBlogPost___socialImage___atime = 'childrenMdxBlogPost___socialImage___atime',
  childrenMdxBlogPost___socialImage___mtime = 'childrenMdxBlogPost___socialImage___mtime',
  childrenMdxBlogPost___socialImage___ctime = 'childrenMdxBlogPost___socialImage___ctime',
  childrenMdxBlogPost___socialImage___birthtime = 'childrenMdxBlogPost___socialImage___birthtime',
  childrenMdxBlogPost___socialImage___birthtimeMs = 'childrenMdxBlogPost___socialImage___birthtimeMs',
  childrenMdxBlogPost___socialImage___blksize = 'childrenMdxBlogPost___socialImage___blksize',
  childrenMdxBlogPost___socialImage___blocks = 'childrenMdxBlogPost___socialImage___blocks',
  childrenMdxBlogPost___socialImage___publicURL = 'childrenMdxBlogPost___socialImage___publicURL',
  childrenMdxBlogPost___socialImage___childrenMdx = 'childrenMdxBlogPost___socialImage___childrenMdx',
  childrenMdxBlogPost___socialImage___childrenMdx___rawBody = 'childrenMdxBlogPost___socialImage___childrenMdx___rawBody',
  childrenMdxBlogPost___socialImage___childrenMdx___fileAbsolutePath = 'childrenMdxBlogPost___socialImage___childrenMdx___fileAbsolutePath',
  childrenMdxBlogPost___socialImage___childrenMdx___slug = 'childrenMdxBlogPost___socialImage___childrenMdx___slug',
  childrenMdxBlogPost___socialImage___childrenMdx___body = 'childrenMdxBlogPost___socialImage___childrenMdx___body',
  childrenMdxBlogPost___socialImage___childrenMdx___excerpt = 'childrenMdxBlogPost___socialImage___childrenMdx___excerpt',
  childrenMdxBlogPost___socialImage___childrenMdx___headings = 'childrenMdxBlogPost___socialImage___childrenMdx___headings',
  childrenMdxBlogPost___socialImage___childrenMdx___html = 'childrenMdxBlogPost___socialImage___childrenMdx___html',
  childrenMdxBlogPost___socialImage___childrenMdx___mdxAST = 'childrenMdxBlogPost___socialImage___childrenMdx___mdxAST',
  childrenMdxBlogPost___socialImage___childrenMdx___tableOfContents = 'childrenMdxBlogPost___socialImage___childrenMdx___tableOfContents',
  childrenMdxBlogPost___socialImage___childrenMdx___timeToRead = 'childrenMdxBlogPost___socialImage___childrenMdx___timeToRead',
  childrenMdxBlogPost___socialImage___childrenMdx___childrenMdxBlogPost = 'childrenMdxBlogPost___socialImage___childrenMdx___childrenMdxBlogPost',
  childrenMdxBlogPost___socialImage___childrenMdx___childrenSidebar = 'childrenMdxBlogPost___socialImage___childrenMdx___childrenSidebar',
  childrenMdxBlogPost___socialImage___childrenMdx___childrenProject = 'childrenMdxBlogPost___socialImage___childrenMdx___childrenProject',
  childrenMdxBlogPost___socialImage___childrenMdx___id = 'childrenMdxBlogPost___socialImage___childrenMdx___id',
  childrenMdxBlogPost___socialImage___childrenMdx___children = 'childrenMdxBlogPost___socialImage___childrenMdx___children',
  childrenMdxBlogPost___socialImage___childMdx___rawBody = 'childrenMdxBlogPost___socialImage___childMdx___rawBody',
  childrenMdxBlogPost___socialImage___childMdx___fileAbsolutePath = 'childrenMdxBlogPost___socialImage___childMdx___fileAbsolutePath',
  childrenMdxBlogPost___socialImage___childMdx___slug = 'childrenMdxBlogPost___socialImage___childMdx___slug',
  childrenMdxBlogPost___socialImage___childMdx___body = 'childrenMdxBlogPost___socialImage___childMdx___body',
  childrenMdxBlogPost___socialImage___childMdx___excerpt = 'childrenMdxBlogPost___socialImage___childMdx___excerpt',
  childrenMdxBlogPost___socialImage___childMdx___headings = 'childrenMdxBlogPost___socialImage___childMdx___headings',
  childrenMdxBlogPost___socialImage___childMdx___html = 'childrenMdxBlogPost___socialImage___childMdx___html',
  childrenMdxBlogPost___socialImage___childMdx___mdxAST = 'childrenMdxBlogPost___socialImage___childMdx___mdxAST',
  childrenMdxBlogPost___socialImage___childMdx___tableOfContents = 'childrenMdxBlogPost___socialImage___childMdx___tableOfContents',
  childrenMdxBlogPost___socialImage___childMdx___timeToRead = 'childrenMdxBlogPost___socialImage___childMdx___timeToRead',
  childrenMdxBlogPost___socialImage___childMdx___childrenMdxBlogPost = 'childrenMdxBlogPost___socialImage___childMdx___childrenMdxBlogPost',
  childrenMdxBlogPost___socialImage___childMdx___childrenSidebar = 'childrenMdxBlogPost___socialImage___childMdx___childrenSidebar',
  childrenMdxBlogPost___socialImage___childMdx___childrenProject = 'childrenMdxBlogPost___socialImage___childMdx___childrenProject',
  childrenMdxBlogPost___socialImage___childMdx___id = 'childrenMdxBlogPost___socialImage___childMdx___id',
  childrenMdxBlogPost___socialImage___childMdx___children = 'childrenMdxBlogPost___socialImage___childMdx___children',
  childrenMdxBlogPost___socialImage___childrenImageSharp = 'childrenMdxBlogPost___socialImage___childrenImageSharp',
  childrenMdxBlogPost___socialImage___childrenImageSharp___gatsbyImageData = 'childrenMdxBlogPost___socialImage___childrenImageSharp___gatsbyImageData',
  childrenMdxBlogPost___socialImage___childrenImageSharp___id = 'childrenMdxBlogPost___socialImage___childrenImageSharp___id',
  childrenMdxBlogPost___socialImage___childrenImageSharp___children = 'childrenMdxBlogPost___socialImage___childrenImageSharp___children',
  childrenMdxBlogPost___socialImage___childImageSharp___gatsbyImageData = 'childrenMdxBlogPost___socialImage___childImageSharp___gatsbyImageData',
  childrenMdxBlogPost___socialImage___childImageSharp___id = 'childrenMdxBlogPost___socialImage___childImageSharp___id',
  childrenMdxBlogPost___socialImage___childImageSharp___children = 'childrenMdxBlogPost___socialImage___childImageSharp___children',
  childrenMdxBlogPost___socialImage___id = 'childrenMdxBlogPost___socialImage___id',
  childrenMdxBlogPost___socialImage___parent___id = 'childrenMdxBlogPost___socialImage___parent___id',
  childrenMdxBlogPost___socialImage___parent___children = 'childrenMdxBlogPost___socialImage___parent___children',
  childrenMdxBlogPost___socialImage___children = 'childrenMdxBlogPost___socialImage___children',
  childrenMdxBlogPost___socialImage___children___id = 'childrenMdxBlogPost___socialImage___children___id',
  childrenMdxBlogPost___socialImage___children___children = 'childrenMdxBlogPost___socialImage___children___children',
  childrenMdxBlogPost___socialImage___internal___content = 'childrenMdxBlogPost___socialImage___internal___content',
  childrenMdxBlogPost___socialImage___internal___contentDigest = 'childrenMdxBlogPost___socialImage___internal___contentDigest',
  childrenMdxBlogPost___socialImage___internal___description = 'childrenMdxBlogPost___socialImage___internal___description',
  childrenMdxBlogPost___socialImage___internal___fieldOwners = 'childrenMdxBlogPost___socialImage___internal___fieldOwners',
  childrenMdxBlogPost___socialImage___internal___ignoreType = 'childrenMdxBlogPost___socialImage___internal___ignoreType',
  childrenMdxBlogPost___socialImage___internal___mediaType = 'childrenMdxBlogPost___socialImage___internal___mediaType',
  childrenMdxBlogPost___socialImage___internal___owner = 'childrenMdxBlogPost___socialImage___internal___owner',
  childrenMdxBlogPost___socialImage___internal___type = 'childrenMdxBlogPost___socialImage___internal___type',
  childrenMdxBlogPost___body = 'childrenMdxBlogPost___body',
  childrenMdxBlogPost___fields___description = 'childrenMdxBlogPost___fields___description',
  childrenMdxBlogPost___fields___commentsStatus = 'childrenMdxBlogPost___fields___commentsStatus',
  childrenMdxBlogPost___fields___slug = 'childrenMdxBlogPost___fields___slug',
  childrenMdxBlogPost___fields___projectId = 'childrenMdxBlogPost___fields___projectId',
  childrenMdxBlogPost___parent___id = 'childrenMdxBlogPost___parent___id',
  childrenMdxBlogPost___parent___parent___id = 'childrenMdxBlogPost___parent___parent___id',
  childrenMdxBlogPost___parent___parent___children = 'childrenMdxBlogPost___parent___parent___children',
  childrenMdxBlogPost___parent___children = 'childrenMdxBlogPost___parent___children',
  childrenMdxBlogPost___parent___children___id = 'childrenMdxBlogPost___parent___children___id',
  childrenMdxBlogPost___parent___children___children = 'childrenMdxBlogPost___parent___children___children',
  childrenMdxBlogPost___parent___internal___content = 'childrenMdxBlogPost___parent___internal___content',
  childrenMdxBlogPost___parent___internal___contentDigest = 'childrenMdxBlogPost___parent___internal___contentDigest',
  childrenMdxBlogPost___parent___internal___description = 'childrenMdxBlogPost___parent___internal___description',
  childrenMdxBlogPost___parent___internal___fieldOwners = 'childrenMdxBlogPost___parent___internal___fieldOwners',
  childrenMdxBlogPost___parent___internal___ignoreType = 'childrenMdxBlogPost___parent___internal___ignoreType',
  childrenMdxBlogPost___parent___internal___mediaType = 'childrenMdxBlogPost___parent___internal___mediaType',
  childrenMdxBlogPost___parent___internal___owner = 'childrenMdxBlogPost___parent___internal___owner',
  childrenMdxBlogPost___parent___internal___type = 'childrenMdxBlogPost___parent___internal___type',
  childrenMdxBlogPost___children = 'childrenMdxBlogPost___children',
  childrenMdxBlogPost___children___id = 'childrenMdxBlogPost___children___id',
  childrenMdxBlogPost___children___parent___id = 'childrenMdxBlogPost___children___parent___id',
  childrenMdxBlogPost___children___parent___children = 'childrenMdxBlogPost___children___parent___children',
  childrenMdxBlogPost___children___children = 'childrenMdxBlogPost___children___children',
  childrenMdxBlogPost___children___children___id = 'childrenMdxBlogPost___children___children___id',
  childrenMdxBlogPost___children___children___children = 'childrenMdxBlogPost___children___children___children',
  childrenMdxBlogPost___children___internal___content = 'childrenMdxBlogPost___children___internal___content',
  childrenMdxBlogPost___children___internal___contentDigest = 'childrenMdxBlogPost___children___internal___contentDigest',
  childrenMdxBlogPost___children___internal___description = 'childrenMdxBlogPost___children___internal___description',
  childrenMdxBlogPost___children___internal___fieldOwners = 'childrenMdxBlogPost___children___internal___fieldOwners',
  childrenMdxBlogPost___children___internal___ignoreType = 'childrenMdxBlogPost___children___internal___ignoreType',
  childrenMdxBlogPost___children___internal___mediaType = 'childrenMdxBlogPost___children___internal___mediaType',
  childrenMdxBlogPost___children___internal___owner = 'childrenMdxBlogPost___children___internal___owner',
  childrenMdxBlogPost___children___internal___type = 'childrenMdxBlogPost___children___internal___type',
  childrenMdxBlogPost___internal___content = 'childrenMdxBlogPost___internal___content',
  childrenMdxBlogPost___internal___contentDigest = 'childrenMdxBlogPost___internal___contentDigest',
  childrenMdxBlogPost___internal___description = 'childrenMdxBlogPost___internal___description',
  childrenMdxBlogPost___internal___fieldOwners = 'childrenMdxBlogPost___internal___fieldOwners',
  childrenMdxBlogPost___internal___ignoreType = 'childrenMdxBlogPost___internal___ignoreType',
  childrenMdxBlogPost___internal___mediaType = 'childrenMdxBlogPost___internal___mediaType',
  childrenMdxBlogPost___internal___owner = 'childrenMdxBlogPost___internal___owner',
  childrenMdxBlogPost___internal___type = 'childrenMdxBlogPost___internal___type',
  childMdxBlogPost___id = 'childMdxBlogPost___id',
  childMdxBlogPost___title = 'childMdxBlogPost___title',
  childMdxBlogPost___slug = 'childMdxBlogPost___slug',
  childMdxBlogPost___date = 'childMdxBlogPost___date',
  childMdxBlogPost___tags = 'childMdxBlogPost___tags',
  childMdxBlogPost___excerpt = 'childMdxBlogPost___excerpt',
  childMdxBlogPost___image___sourceInstanceName = 'childMdxBlogPost___image___sourceInstanceName',
  childMdxBlogPost___image___absolutePath = 'childMdxBlogPost___image___absolutePath',
  childMdxBlogPost___image___relativePath = 'childMdxBlogPost___image___relativePath',
  childMdxBlogPost___image___extension = 'childMdxBlogPost___image___extension',
  childMdxBlogPost___image___size = 'childMdxBlogPost___image___size',
  childMdxBlogPost___image___prettySize = 'childMdxBlogPost___image___prettySize',
  childMdxBlogPost___image___modifiedTime = 'childMdxBlogPost___image___modifiedTime',
  childMdxBlogPost___image___accessTime = 'childMdxBlogPost___image___accessTime',
  childMdxBlogPost___image___changeTime = 'childMdxBlogPost___image___changeTime',
  childMdxBlogPost___image___birthTime = 'childMdxBlogPost___image___birthTime',
  childMdxBlogPost___image___root = 'childMdxBlogPost___image___root',
  childMdxBlogPost___image___dir = 'childMdxBlogPost___image___dir',
  childMdxBlogPost___image___base = 'childMdxBlogPost___image___base',
  childMdxBlogPost___image___ext = 'childMdxBlogPost___image___ext',
  childMdxBlogPost___image___name = 'childMdxBlogPost___image___name',
  childMdxBlogPost___image___relativeDirectory = 'childMdxBlogPost___image___relativeDirectory',
  childMdxBlogPost___image___dev = 'childMdxBlogPost___image___dev',
  childMdxBlogPost___image___mode = 'childMdxBlogPost___image___mode',
  childMdxBlogPost___image___nlink = 'childMdxBlogPost___image___nlink',
  childMdxBlogPost___image___uid = 'childMdxBlogPost___image___uid',
  childMdxBlogPost___image___gid = 'childMdxBlogPost___image___gid',
  childMdxBlogPost___image___rdev = 'childMdxBlogPost___image___rdev',
  childMdxBlogPost___image___ino = 'childMdxBlogPost___image___ino',
  childMdxBlogPost___image___atimeMs = 'childMdxBlogPost___image___atimeMs',
  childMdxBlogPost___image___mtimeMs = 'childMdxBlogPost___image___mtimeMs',
  childMdxBlogPost___image___ctimeMs = 'childMdxBlogPost___image___ctimeMs',
  childMdxBlogPost___image___atime = 'childMdxBlogPost___image___atime',
  childMdxBlogPost___image___mtime = 'childMdxBlogPost___image___mtime',
  childMdxBlogPost___image___ctime = 'childMdxBlogPost___image___ctime',
  childMdxBlogPost___image___birthtime = 'childMdxBlogPost___image___birthtime',
  childMdxBlogPost___image___birthtimeMs = 'childMdxBlogPost___image___birthtimeMs',
  childMdxBlogPost___image___blksize = 'childMdxBlogPost___image___blksize',
  childMdxBlogPost___image___blocks = 'childMdxBlogPost___image___blocks',
  childMdxBlogPost___image___publicURL = 'childMdxBlogPost___image___publicURL',
  childMdxBlogPost___image___childrenMdx = 'childMdxBlogPost___image___childrenMdx',
  childMdxBlogPost___image___childrenMdx___rawBody = 'childMdxBlogPost___image___childrenMdx___rawBody',
  childMdxBlogPost___image___childrenMdx___fileAbsolutePath = 'childMdxBlogPost___image___childrenMdx___fileAbsolutePath',
  childMdxBlogPost___image___childrenMdx___slug = 'childMdxBlogPost___image___childrenMdx___slug',
  childMdxBlogPost___image___childrenMdx___body = 'childMdxBlogPost___image___childrenMdx___body',
  childMdxBlogPost___image___childrenMdx___excerpt = 'childMdxBlogPost___image___childrenMdx___excerpt',
  childMdxBlogPost___image___childrenMdx___headings = 'childMdxBlogPost___image___childrenMdx___headings',
  childMdxBlogPost___image___childrenMdx___html = 'childMdxBlogPost___image___childrenMdx___html',
  childMdxBlogPost___image___childrenMdx___mdxAST = 'childMdxBlogPost___image___childrenMdx___mdxAST',
  childMdxBlogPost___image___childrenMdx___tableOfContents = 'childMdxBlogPost___image___childrenMdx___tableOfContents',
  childMdxBlogPost___image___childrenMdx___timeToRead = 'childMdxBlogPost___image___childrenMdx___timeToRead',
  childMdxBlogPost___image___childrenMdx___childrenMdxBlogPost = 'childMdxBlogPost___image___childrenMdx___childrenMdxBlogPost',
  childMdxBlogPost___image___childrenMdx___childrenSidebar = 'childMdxBlogPost___image___childrenMdx___childrenSidebar',
  childMdxBlogPost___image___childrenMdx___childrenProject = 'childMdxBlogPost___image___childrenMdx___childrenProject',
  childMdxBlogPost___image___childrenMdx___id = 'childMdxBlogPost___image___childrenMdx___id',
  childMdxBlogPost___image___childrenMdx___children = 'childMdxBlogPost___image___childrenMdx___children',
  childMdxBlogPost___image___childMdx___rawBody = 'childMdxBlogPost___image___childMdx___rawBody',
  childMdxBlogPost___image___childMdx___fileAbsolutePath = 'childMdxBlogPost___image___childMdx___fileAbsolutePath',
  childMdxBlogPost___image___childMdx___slug = 'childMdxBlogPost___image___childMdx___slug',
  childMdxBlogPost___image___childMdx___body = 'childMdxBlogPost___image___childMdx___body',
  childMdxBlogPost___image___childMdx___excerpt = 'childMdxBlogPost___image___childMdx___excerpt',
  childMdxBlogPost___image___childMdx___headings = 'childMdxBlogPost___image___childMdx___headings',
  childMdxBlogPost___image___childMdx___html = 'childMdxBlogPost___image___childMdx___html',
  childMdxBlogPost___image___childMdx___mdxAST = 'childMdxBlogPost___image___childMdx___mdxAST',
  childMdxBlogPost___image___childMdx___tableOfContents = 'childMdxBlogPost___image___childMdx___tableOfContents',
  childMdxBlogPost___image___childMdx___timeToRead = 'childMdxBlogPost___image___childMdx___timeToRead',
  childMdxBlogPost___image___childMdx___childrenMdxBlogPost = 'childMdxBlogPost___image___childMdx___childrenMdxBlogPost',
  childMdxBlogPost___image___childMdx___childrenSidebar = 'childMdxBlogPost___image___childMdx___childrenSidebar',
  childMdxBlogPost___image___childMdx___childrenProject = 'childMdxBlogPost___image___childMdx___childrenProject',
  childMdxBlogPost___image___childMdx___id = 'childMdxBlogPost___image___childMdx___id',
  childMdxBlogPost___image___childMdx___children = 'childMdxBlogPost___image___childMdx___children',
  childMdxBlogPost___image___childrenImageSharp = 'childMdxBlogPost___image___childrenImageSharp',
  childMdxBlogPost___image___childrenImageSharp___gatsbyImageData = 'childMdxBlogPost___image___childrenImageSharp___gatsbyImageData',
  childMdxBlogPost___image___childrenImageSharp___id = 'childMdxBlogPost___image___childrenImageSharp___id',
  childMdxBlogPost___image___childrenImageSharp___children = 'childMdxBlogPost___image___childrenImageSharp___children',
  childMdxBlogPost___image___childImageSharp___gatsbyImageData = 'childMdxBlogPost___image___childImageSharp___gatsbyImageData',
  childMdxBlogPost___image___childImageSharp___id = 'childMdxBlogPost___image___childImageSharp___id',
  childMdxBlogPost___image___childImageSharp___children = 'childMdxBlogPost___image___childImageSharp___children',
  childMdxBlogPost___image___id = 'childMdxBlogPost___image___id',
  childMdxBlogPost___image___parent___id = 'childMdxBlogPost___image___parent___id',
  childMdxBlogPost___image___parent___children = 'childMdxBlogPost___image___parent___children',
  childMdxBlogPost___image___children = 'childMdxBlogPost___image___children',
  childMdxBlogPost___image___children___id = 'childMdxBlogPost___image___children___id',
  childMdxBlogPost___image___children___children = 'childMdxBlogPost___image___children___children',
  childMdxBlogPost___image___internal___content = 'childMdxBlogPost___image___internal___content',
  childMdxBlogPost___image___internal___contentDigest = 'childMdxBlogPost___image___internal___contentDigest',
  childMdxBlogPost___image___internal___description = 'childMdxBlogPost___image___internal___description',
  childMdxBlogPost___image___internal___fieldOwners = 'childMdxBlogPost___image___internal___fieldOwners',
  childMdxBlogPost___image___internal___ignoreType = 'childMdxBlogPost___image___internal___ignoreType',
  childMdxBlogPost___image___internal___mediaType = 'childMdxBlogPost___image___internal___mediaType',
  childMdxBlogPost___image___internal___owner = 'childMdxBlogPost___image___internal___owner',
  childMdxBlogPost___image___internal___type = 'childMdxBlogPost___image___internal___type',
  childMdxBlogPost___imageAlt = 'childMdxBlogPost___imageAlt',
  childMdxBlogPost___imageCaptionText = 'childMdxBlogPost___imageCaptionText',
  childMdxBlogPost___imageCaptionLink = 'childMdxBlogPost___imageCaptionLink',
  childMdxBlogPost___socialImage___sourceInstanceName = 'childMdxBlogPost___socialImage___sourceInstanceName',
  childMdxBlogPost___socialImage___absolutePath = 'childMdxBlogPost___socialImage___absolutePath',
  childMdxBlogPost___socialImage___relativePath = 'childMdxBlogPost___socialImage___relativePath',
  childMdxBlogPost___socialImage___extension = 'childMdxBlogPost___socialImage___extension',
  childMdxBlogPost___socialImage___size = 'childMdxBlogPost___socialImage___size',
  childMdxBlogPost___socialImage___prettySize = 'childMdxBlogPost___socialImage___prettySize',
  childMdxBlogPost___socialImage___modifiedTime = 'childMdxBlogPost___socialImage___modifiedTime',
  childMdxBlogPost___socialImage___accessTime = 'childMdxBlogPost___socialImage___accessTime',
  childMdxBlogPost___socialImage___changeTime = 'childMdxBlogPost___socialImage___changeTime',
  childMdxBlogPost___socialImage___birthTime = 'childMdxBlogPost___socialImage___birthTime',
  childMdxBlogPost___socialImage___root = 'childMdxBlogPost___socialImage___root',
  childMdxBlogPost___socialImage___dir = 'childMdxBlogPost___socialImage___dir',
  childMdxBlogPost___socialImage___base = 'childMdxBlogPost___socialImage___base',
  childMdxBlogPost___socialImage___ext = 'childMdxBlogPost___socialImage___ext',
  childMdxBlogPost___socialImage___name = 'childMdxBlogPost___socialImage___name',
  childMdxBlogPost___socialImage___relativeDirectory = 'childMdxBlogPost___socialImage___relativeDirectory',
  childMdxBlogPost___socialImage___dev = 'childMdxBlogPost___socialImage___dev',
  childMdxBlogPost___socialImage___mode = 'childMdxBlogPost___socialImage___mode',
  childMdxBlogPost___socialImage___nlink = 'childMdxBlogPost___socialImage___nlink',
  childMdxBlogPost___socialImage___uid = 'childMdxBlogPost___socialImage___uid',
  childMdxBlogPost___socialImage___gid = 'childMdxBlogPost___socialImage___gid',
  childMdxBlogPost___socialImage___rdev = 'childMdxBlogPost___socialImage___rdev',
  childMdxBlogPost___socialImage___ino = 'childMdxBlogPost___socialImage___ino',
  childMdxBlogPost___socialImage___atimeMs = 'childMdxBlogPost___socialImage___atimeMs',
  childMdxBlogPost___socialImage___mtimeMs = 'childMdxBlogPost___socialImage___mtimeMs',
  childMdxBlogPost___socialImage___ctimeMs = 'childMdxBlogPost___socialImage___ctimeMs',
  childMdxBlogPost___socialImage___atime = 'childMdxBlogPost___socialImage___atime',
  childMdxBlogPost___socialImage___mtime = 'childMdxBlogPost___socialImage___mtime',
  childMdxBlogPost___socialImage___ctime = 'childMdxBlogPost___socialImage___ctime',
  childMdxBlogPost___socialImage___birthtime = 'childMdxBlogPost___socialImage___birthtime',
  childMdxBlogPost___socialImage___birthtimeMs = 'childMdxBlogPost___socialImage___birthtimeMs',
  childMdxBlogPost___socialImage___blksize = 'childMdxBlogPost___socialImage___blksize',
  childMdxBlogPost___socialImage___blocks = 'childMdxBlogPost___socialImage___blocks',
  childMdxBlogPost___socialImage___publicURL = 'childMdxBlogPost___socialImage___publicURL',
  childMdxBlogPost___socialImage___childrenMdx = 'childMdxBlogPost___socialImage___childrenMdx',
  childMdxBlogPost___socialImage___childrenMdx___rawBody = 'childMdxBlogPost___socialImage___childrenMdx___rawBody',
  childMdxBlogPost___socialImage___childrenMdx___fileAbsolutePath = 'childMdxBlogPost___socialImage___childrenMdx___fileAbsolutePath',
  childMdxBlogPost___socialImage___childrenMdx___slug = 'childMdxBlogPost___socialImage___childrenMdx___slug',
  childMdxBlogPost___socialImage___childrenMdx___body = 'childMdxBlogPost___socialImage___childrenMdx___body',
  childMdxBlogPost___socialImage___childrenMdx___excerpt = 'childMdxBlogPost___socialImage___childrenMdx___excerpt',
  childMdxBlogPost___socialImage___childrenMdx___headings = 'childMdxBlogPost___socialImage___childrenMdx___headings',
  childMdxBlogPost___socialImage___childrenMdx___html = 'childMdxBlogPost___socialImage___childrenMdx___html',
  childMdxBlogPost___socialImage___childrenMdx___mdxAST = 'childMdxBlogPost___socialImage___childrenMdx___mdxAST',
  childMdxBlogPost___socialImage___childrenMdx___tableOfContents = 'childMdxBlogPost___socialImage___childrenMdx___tableOfContents',
  childMdxBlogPost___socialImage___childrenMdx___timeToRead = 'childMdxBlogPost___socialImage___childrenMdx___timeToRead',
  childMdxBlogPost___socialImage___childrenMdx___childrenMdxBlogPost = 'childMdxBlogPost___socialImage___childrenMdx___childrenMdxBlogPost',
  childMdxBlogPost___socialImage___childrenMdx___childrenSidebar = 'childMdxBlogPost___socialImage___childrenMdx___childrenSidebar',
  childMdxBlogPost___socialImage___childrenMdx___childrenProject = 'childMdxBlogPost___socialImage___childrenMdx___childrenProject',
  childMdxBlogPost___socialImage___childrenMdx___id = 'childMdxBlogPost___socialImage___childrenMdx___id',
  childMdxBlogPost___socialImage___childrenMdx___children = 'childMdxBlogPost___socialImage___childrenMdx___children',
  childMdxBlogPost___socialImage___childMdx___rawBody = 'childMdxBlogPost___socialImage___childMdx___rawBody',
  childMdxBlogPost___socialImage___childMdx___fileAbsolutePath = 'childMdxBlogPost___socialImage___childMdx___fileAbsolutePath',
  childMdxBlogPost___socialImage___childMdx___slug = 'childMdxBlogPost___socialImage___childMdx___slug',
  childMdxBlogPost___socialImage___childMdx___body = 'childMdxBlogPost___socialImage___childMdx___body',
  childMdxBlogPost___socialImage___childMdx___excerpt = 'childMdxBlogPost___socialImage___childMdx___excerpt',
  childMdxBlogPost___socialImage___childMdx___headings = 'childMdxBlogPost___socialImage___childMdx___headings',
  childMdxBlogPost___socialImage___childMdx___html = 'childMdxBlogPost___socialImage___childMdx___html',
  childMdxBlogPost___socialImage___childMdx___mdxAST = 'childMdxBlogPost___socialImage___childMdx___mdxAST',
  childMdxBlogPost___socialImage___childMdx___tableOfContents = 'childMdxBlogPost___socialImage___childMdx___tableOfContents',
  childMdxBlogPost___socialImage___childMdx___timeToRead = 'childMdxBlogPost___socialImage___childMdx___timeToRead',
  childMdxBlogPost___socialImage___childMdx___childrenMdxBlogPost = 'childMdxBlogPost___socialImage___childMdx___childrenMdxBlogPost',
  childMdxBlogPost___socialImage___childMdx___childrenSidebar = 'childMdxBlogPost___socialImage___childMdx___childrenSidebar',
  childMdxBlogPost___socialImage___childMdx___childrenProject = 'childMdxBlogPost___socialImage___childMdx___childrenProject',
  childMdxBlogPost___socialImage___childMdx___id = 'childMdxBlogPost___socialImage___childMdx___id',
  childMdxBlogPost___socialImage___childMdx___children = 'childMdxBlogPost___socialImage___childMdx___children',
  childMdxBlogPost___socialImage___childrenImageSharp = 'childMdxBlogPost___socialImage___childrenImageSharp',
  childMdxBlogPost___socialImage___childrenImageSharp___gatsbyImageData = 'childMdxBlogPost___socialImage___childrenImageSharp___gatsbyImageData',
  childMdxBlogPost___socialImage___childrenImageSharp___id = 'childMdxBlogPost___socialImage___childrenImageSharp___id',
  childMdxBlogPost___socialImage___childrenImageSharp___children = 'childMdxBlogPost___socialImage___childrenImageSharp___children',
  childMdxBlogPost___socialImage___childImageSharp___gatsbyImageData = 'childMdxBlogPost___socialImage___childImageSharp___gatsbyImageData',
  childMdxBlogPost___socialImage___childImageSharp___id = 'childMdxBlogPost___socialImage___childImageSharp___id',
  childMdxBlogPost___socialImage___childImageSharp___children = 'childMdxBlogPost___socialImage___childImageSharp___children',
  childMdxBlogPost___socialImage___id = 'childMdxBlogPost___socialImage___id',
  childMdxBlogPost___socialImage___parent___id = 'childMdxBlogPost___socialImage___parent___id',
  childMdxBlogPost___socialImage___parent___children = 'childMdxBlogPost___socialImage___parent___children',
  childMdxBlogPost___socialImage___children = 'childMdxBlogPost___socialImage___children',
  childMdxBlogPost___socialImage___children___id = 'childMdxBlogPost___socialImage___children___id',
  childMdxBlogPost___socialImage___children___children = 'childMdxBlogPost___socialImage___children___children',
  childMdxBlogPost___socialImage___internal___content = 'childMdxBlogPost___socialImage___internal___content',
  childMdxBlogPost___socialImage___internal___contentDigest = 'childMdxBlogPost___socialImage___internal___contentDigest',
  childMdxBlogPost___socialImage___internal___description = 'childMdxBlogPost___socialImage___internal___description',
  childMdxBlogPost___socialImage___internal___fieldOwners = 'childMdxBlogPost___socialImage___internal___fieldOwners',
  childMdxBlogPost___socialImage___internal___ignoreType = 'childMdxBlogPost___socialImage___internal___ignoreType',
  childMdxBlogPost___socialImage___internal___mediaType = 'childMdxBlogPost___socialImage___internal___mediaType',
  childMdxBlogPost___socialImage___internal___owner = 'childMdxBlogPost___socialImage___internal___owner',
  childMdxBlogPost___socialImage___internal___type = 'childMdxBlogPost___socialImage___internal___type',
  childMdxBlogPost___body = 'childMdxBlogPost___body',
  childMdxBlogPost___fields___description = 'childMdxBlogPost___fields___description',
  childMdxBlogPost___fields___commentsStatus = 'childMdxBlogPost___fields___commentsStatus',
  childMdxBlogPost___fields___slug = 'childMdxBlogPost___fields___slug',
  childMdxBlogPost___fields___projectId = 'childMdxBlogPost___fields___projectId',
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
  childrenSidebar = 'childrenSidebar',
  childrenSidebar___id = 'childrenSidebar___id',
  childrenSidebar___parent___id = 'childrenSidebar___parent___id',
  childrenSidebar___parent___parent___id = 'childrenSidebar___parent___parent___id',
  childrenSidebar___parent___parent___children = 'childrenSidebar___parent___parent___children',
  childrenSidebar___parent___children = 'childrenSidebar___parent___children',
  childrenSidebar___parent___children___id = 'childrenSidebar___parent___children___id',
  childrenSidebar___parent___children___children = 'childrenSidebar___parent___children___children',
  childrenSidebar___parent___internal___content = 'childrenSidebar___parent___internal___content',
  childrenSidebar___parent___internal___contentDigest = 'childrenSidebar___parent___internal___contentDigest',
  childrenSidebar___parent___internal___description = 'childrenSidebar___parent___internal___description',
  childrenSidebar___parent___internal___fieldOwners = 'childrenSidebar___parent___internal___fieldOwners',
  childrenSidebar___parent___internal___ignoreType = 'childrenSidebar___parent___internal___ignoreType',
  childrenSidebar___parent___internal___mediaType = 'childrenSidebar___parent___internal___mediaType',
  childrenSidebar___parent___internal___owner = 'childrenSidebar___parent___internal___owner',
  childrenSidebar___parent___internal___type = 'childrenSidebar___parent___internal___type',
  childrenSidebar___children = 'childrenSidebar___children',
  childrenSidebar___children___id = 'childrenSidebar___children___id',
  childrenSidebar___children___parent___id = 'childrenSidebar___children___parent___id',
  childrenSidebar___children___parent___children = 'childrenSidebar___children___parent___children',
  childrenSidebar___children___children = 'childrenSidebar___children___children',
  childrenSidebar___children___children___id = 'childrenSidebar___children___children___id',
  childrenSidebar___children___children___children = 'childrenSidebar___children___children___children',
  childrenSidebar___children___internal___content = 'childrenSidebar___children___internal___content',
  childrenSidebar___children___internal___contentDigest = 'childrenSidebar___children___internal___contentDigest',
  childrenSidebar___children___internal___description = 'childrenSidebar___children___internal___description',
  childrenSidebar___children___internal___fieldOwners = 'childrenSidebar___children___internal___fieldOwners',
  childrenSidebar___children___internal___ignoreType = 'childrenSidebar___children___internal___ignoreType',
  childrenSidebar___children___internal___mediaType = 'childrenSidebar___children___internal___mediaType',
  childrenSidebar___children___internal___owner = 'childrenSidebar___children___internal___owner',
  childrenSidebar___children___internal___type = 'childrenSidebar___children___internal___type',
  childrenSidebar___internal___content = 'childrenSidebar___internal___content',
  childrenSidebar___internal___contentDigest = 'childrenSidebar___internal___contentDigest',
  childrenSidebar___internal___description = 'childrenSidebar___internal___description',
  childrenSidebar___internal___fieldOwners = 'childrenSidebar___internal___fieldOwners',
  childrenSidebar___internal___ignoreType = 'childrenSidebar___internal___ignoreType',
  childrenSidebar___internal___mediaType = 'childrenSidebar___internal___mediaType',
  childrenSidebar___internal___owner = 'childrenSidebar___internal___owner',
  childrenSidebar___internal___type = 'childrenSidebar___internal___type',
  childrenSidebar___slug = 'childrenSidebar___slug',
  childrenSidebar___title = 'childrenSidebar___title',
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
  childrenProject = 'childrenProject',
  childrenProject___id = 'childrenProject___id',
  childrenProject___parent___id = 'childrenProject___parent___id',
  childrenProject___parent___parent___id = 'childrenProject___parent___parent___id',
  childrenProject___parent___parent___children = 'childrenProject___parent___parent___children',
  childrenProject___parent___children = 'childrenProject___parent___children',
  childrenProject___parent___children___id = 'childrenProject___parent___children___id',
  childrenProject___parent___children___children = 'childrenProject___parent___children___children',
  childrenProject___parent___internal___content = 'childrenProject___parent___internal___content',
  childrenProject___parent___internal___contentDigest = 'childrenProject___parent___internal___contentDigest',
  childrenProject___parent___internal___description = 'childrenProject___parent___internal___description',
  childrenProject___parent___internal___fieldOwners = 'childrenProject___parent___internal___fieldOwners',
  childrenProject___parent___internal___ignoreType = 'childrenProject___parent___internal___ignoreType',
  childrenProject___parent___internal___mediaType = 'childrenProject___parent___internal___mediaType',
  childrenProject___parent___internal___owner = 'childrenProject___parent___internal___owner',
  childrenProject___parent___internal___type = 'childrenProject___parent___internal___type',
  childrenProject___children = 'childrenProject___children',
  childrenProject___children___id = 'childrenProject___children___id',
  childrenProject___children___parent___id = 'childrenProject___children___parent___id',
  childrenProject___children___parent___children = 'childrenProject___children___parent___children',
  childrenProject___children___children = 'childrenProject___children___children',
  childrenProject___children___children___id = 'childrenProject___children___children___id',
  childrenProject___children___children___children = 'childrenProject___children___children___children',
  childrenProject___children___internal___content = 'childrenProject___children___internal___content',
  childrenProject___children___internal___contentDigest = 'childrenProject___children___internal___contentDigest',
  childrenProject___children___internal___description = 'childrenProject___children___internal___description',
  childrenProject___children___internal___fieldOwners = 'childrenProject___children___internal___fieldOwners',
  childrenProject___children___internal___ignoreType = 'childrenProject___children___internal___ignoreType',
  childrenProject___children___internal___mediaType = 'childrenProject___children___internal___mediaType',
  childrenProject___children___internal___owner = 'childrenProject___children___internal___owner',
  childrenProject___children___internal___type = 'childrenProject___children___internal___type',
  childrenProject___internal___content = 'childrenProject___internal___content',
  childrenProject___internal___contentDigest = 'childrenProject___internal___contentDigest',
  childrenProject___internal___description = 'childrenProject___internal___description',
  childrenProject___internal___fieldOwners = 'childrenProject___internal___fieldOwners',
  childrenProject___internal___ignoreType = 'childrenProject___internal___ignoreType',
  childrenProject___internal___mediaType = 'childrenProject___internal___mediaType',
  childrenProject___internal___owner = 'childrenProject___internal___owner',
  childrenProject___internal___type = 'childrenProject___internal___type',
  childrenProject___projectId = 'childrenProject___projectId',
  childrenProject___slug = 'childrenProject___slug',
  childrenProject___title = 'childrenProject___title',
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
  internal___type = 'internal___type'
}

export type MdxFieldsFilterInput = {
  description?: Maybe<StringQueryOperatorInput>;
  commentsStatus?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  childrenMdxBlogPost?: Maybe<MdxBlogPostFilterListInput>;
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>;
  childrenSidebar?: Maybe<SidebarFilterListInput>;
  childSidebar?: Maybe<SidebarFilterInput>;
  childrenProject?: Maybe<ProjectFilterListInput>;
  childProject?: Maybe<ProjectFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<FeaturedImage>;
  sidebar?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  project?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  featured_image?: Maybe<FeaturedImageFilterInput>;
  sidebar?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  project?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PostComment = Node & {
  name: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  gravatarHash: Scalars['String'];
  post: MdxBlogPost;
  email?: Maybe<Scalars['String']>;
  inReplyTo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  isSpam?: Maybe<Scalars['Boolean']>;
  isTrashed?: Maybe<Scalars['Boolean']>;
  ip?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type PostCommentCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PostCommentConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PostCommentEdge>;
  nodes: Array<PostComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PostCommentGroupConnection>;
};


export type PostCommentConnectionDistinctArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentConnectionMaxArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentConnectionMinArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentConnectionSumArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PostCommentFieldsEnum;
};

export type PostCommentEdge = {
  next?: Maybe<PostComment>;
  node: PostComment;
  previous?: Maybe<PostComment>;
};

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
  post___excerpt = 'post___excerpt',
  post___image___sourceInstanceName = 'post___image___sourceInstanceName',
  post___image___absolutePath = 'post___image___absolutePath',
  post___image___relativePath = 'post___image___relativePath',
  post___image___extension = 'post___image___extension',
  post___image___size = 'post___image___size',
  post___image___prettySize = 'post___image___prettySize',
  post___image___modifiedTime = 'post___image___modifiedTime',
  post___image___accessTime = 'post___image___accessTime',
  post___image___changeTime = 'post___image___changeTime',
  post___image___birthTime = 'post___image___birthTime',
  post___image___root = 'post___image___root',
  post___image___dir = 'post___image___dir',
  post___image___base = 'post___image___base',
  post___image___ext = 'post___image___ext',
  post___image___name = 'post___image___name',
  post___image___relativeDirectory = 'post___image___relativeDirectory',
  post___image___dev = 'post___image___dev',
  post___image___mode = 'post___image___mode',
  post___image___nlink = 'post___image___nlink',
  post___image___uid = 'post___image___uid',
  post___image___gid = 'post___image___gid',
  post___image___rdev = 'post___image___rdev',
  post___image___ino = 'post___image___ino',
  post___image___atimeMs = 'post___image___atimeMs',
  post___image___mtimeMs = 'post___image___mtimeMs',
  post___image___ctimeMs = 'post___image___ctimeMs',
  post___image___atime = 'post___image___atime',
  post___image___mtime = 'post___image___mtime',
  post___image___ctime = 'post___image___ctime',
  post___image___birthtime = 'post___image___birthtime',
  post___image___birthtimeMs = 'post___image___birthtimeMs',
  post___image___blksize = 'post___image___blksize',
  post___image___blocks = 'post___image___blocks',
  post___image___publicURL = 'post___image___publicURL',
  post___image___childrenMdx = 'post___image___childrenMdx',
  post___image___childrenMdx___rawBody = 'post___image___childrenMdx___rawBody',
  post___image___childrenMdx___fileAbsolutePath = 'post___image___childrenMdx___fileAbsolutePath',
  post___image___childrenMdx___slug = 'post___image___childrenMdx___slug',
  post___image___childrenMdx___body = 'post___image___childrenMdx___body',
  post___image___childrenMdx___excerpt = 'post___image___childrenMdx___excerpt',
  post___image___childrenMdx___headings = 'post___image___childrenMdx___headings',
  post___image___childrenMdx___html = 'post___image___childrenMdx___html',
  post___image___childrenMdx___mdxAST = 'post___image___childrenMdx___mdxAST',
  post___image___childrenMdx___tableOfContents = 'post___image___childrenMdx___tableOfContents',
  post___image___childrenMdx___timeToRead = 'post___image___childrenMdx___timeToRead',
  post___image___childrenMdx___childrenMdxBlogPost = 'post___image___childrenMdx___childrenMdxBlogPost',
  post___image___childrenMdx___childrenSidebar = 'post___image___childrenMdx___childrenSidebar',
  post___image___childrenMdx___childrenProject = 'post___image___childrenMdx___childrenProject',
  post___image___childrenMdx___id = 'post___image___childrenMdx___id',
  post___image___childrenMdx___children = 'post___image___childrenMdx___children',
  post___image___childMdx___rawBody = 'post___image___childMdx___rawBody',
  post___image___childMdx___fileAbsolutePath = 'post___image___childMdx___fileAbsolutePath',
  post___image___childMdx___slug = 'post___image___childMdx___slug',
  post___image___childMdx___body = 'post___image___childMdx___body',
  post___image___childMdx___excerpt = 'post___image___childMdx___excerpt',
  post___image___childMdx___headings = 'post___image___childMdx___headings',
  post___image___childMdx___html = 'post___image___childMdx___html',
  post___image___childMdx___mdxAST = 'post___image___childMdx___mdxAST',
  post___image___childMdx___tableOfContents = 'post___image___childMdx___tableOfContents',
  post___image___childMdx___timeToRead = 'post___image___childMdx___timeToRead',
  post___image___childMdx___childrenMdxBlogPost = 'post___image___childMdx___childrenMdxBlogPost',
  post___image___childMdx___childrenSidebar = 'post___image___childMdx___childrenSidebar',
  post___image___childMdx___childrenProject = 'post___image___childMdx___childrenProject',
  post___image___childMdx___id = 'post___image___childMdx___id',
  post___image___childMdx___children = 'post___image___childMdx___children',
  post___image___childrenImageSharp = 'post___image___childrenImageSharp',
  post___image___childrenImageSharp___gatsbyImageData = 'post___image___childrenImageSharp___gatsbyImageData',
  post___image___childrenImageSharp___id = 'post___image___childrenImageSharp___id',
  post___image___childrenImageSharp___children = 'post___image___childrenImageSharp___children',
  post___image___childImageSharp___gatsbyImageData = 'post___image___childImageSharp___gatsbyImageData',
  post___image___childImageSharp___id = 'post___image___childImageSharp___id',
  post___image___childImageSharp___children = 'post___image___childImageSharp___children',
  post___image___id = 'post___image___id',
  post___image___parent___id = 'post___image___parent___id',
  post___image___parent___children = 'post___image___parent___children',
  post___image___children = 'post___image___children',
  post___image___children___id = 'post___image___children___id',
  post___image___children___children = 'post___image___children___children',
  post___image___internal___content = 'post___image___internal___content',
  post___image___internal___contentDigest = 'post___image___internal___contentDigest',
  post___image___internal___description = 'post___image___internal___description',
  post___image___internal___fieldOwners = 'post___image___internal___fieldOwners',
  post___image___internal___ignoreType = 'post___image___internal___ignoreType',
  post___image___internal___mediaType = 'post___image___internal___mediaType',
  post___image___internal___owner = 'post___image___internal___owner',
  post___image___internal___type = 'post___image___internal___type',
  post___imageAlt = 'post___imageAlt',
  post___imageCaptionText = 'post___imageCaptionText',
  post___imageCaptionLink = 'post___imageCaptionLink',
  post___socialImage___sourceInstanceName = 'post___socialImage___sourceInstanceName',
  post___socialImage___absolutePath = 'post___socialImage___absolutePath',
  post___socialImage___relativePath = 'post___socialImage___relativePath',
  post___socialImage___extension = 'post___socialImage___extension',
  post___socialImage___size = 'post___socialImage___size',
  post___socialImage___prettySize = 'post___socialImage___prettySize',
  post___socialImage___modifiedTime = 'post___socialImage___modifiedTime',
  post___socialImage___accessTime = 'post___socialImage___accessTime',
  post___socialImage___changeTime = 'post___socialImage___changeTime',
  post___socialImage___birthTime = 'post___socialImage___birthTime',
  post___socialImage___root = 'post___socialImage___root',
  post___socialImage___dir = 'post___socialImage___dir',
  post___socialImage___base = 'post___socialImage___base',
  post___socialImage___ext = 'post___socialImage___ext',
  post___socialImage___name = 'post___socialImage___name',
  post___socialImage___relativeDirectory = 'post___socialImage___relativeDirectory',
  post___socialImage___dev = 'post___socialImage___dev',
  post___socialImage___mode = 'post___socialImage___mode',
  post___socialImage___nlink = 'post___socialImage___nlink',
  post___socialImage___uid = 'post___socialImage___uid',
  post___socialImage___gid = 'post___socialImage___gid',
  post___socialImage___rdev = 'post___socialImage___rdev',
  post___socialImage___ino = 'post___socialImage___ino',
  post___socialImage___atimeMs = 'post___socialImage___atimeMs',
  post___socialImage___mtimeMs = 'post___socialImage___mtimeMs',
  post___socialImage___ctimeMs = 'post___socialImage___ctimeMs',
  post___socialImage___atime = 'post___socialImage___atime',
  post___socialImage___mtime = 'post___socialImage___mtime',
  post___socialImage___ctime = 'post___socialImage___ctime',
  post___socialImage___birthtime = 'post___socialImage___birthtime',
  post___socialImage___birthtimeMs = 'post___socialImage___birthtimeMs',
  post___socialImage___blksize = 'post___socialImage___blksize',
  post___socialImage___blocks = 'post___socialImage___blocks',
  post___socialImage___publicURL = 'post___socialImage___publicURL',
  post___socialImage___childrenMdx = 'post___socialImage___childrenMdx',
  post___socialImage___childrenMdx___rawBody = 'post___socialImage___childrenMdx___rawBody',
  post___socialImage___childrenMdx___fileAbsolutePath = 'post___socialImage___childrenMdx___fileAbsolutePath',
  post___socialImage___childrenMdx___slug = 'post___socialImage___childrenMdx___slug',
  post___socialImage___childrenMdx___body = 'post___socialImage___childrenMdx___body',
  post___socialImage___childrenMdx___excerpt = 'post___socialImage___childrenMdx___excerpt',
  post___socialImage___childrenMdx___headings = 'post___socialImage___childrenMdx___headings',
  post___socialImage___childrenMdx___html = 'post___socialImage___childrenMdx___html',
  post___socialImage___childrenMdx___mdxAST = 'post___socialImage___childrenMdx___mdxAST',
  post___socialImage___childrenMdx___tableOfContents = 'post___socialImage___childrenMdx___tableOfContents',
  post___socialImage___childrenMdx___timeToRead = 'post___socialImage___childrenMdx___timeToRead',
  post___socialImage___childrenMdx___childrenMdxBlogPost = 'post___socialImage___childrenMdx___childrenMdxBlogPost',
  post___socialImage___childrenMdx___childrenSidebar = 'post___socialImage___childrenMdx___childrenSidebar',
  post___socialImage___childrenMdx___childrenProject = 'post___socialImage___childrenMdx___childrenProject',
  post___socialImage___childrenMdx___id = 'post___socialImage___childrenMdx___id',
  post___socialImage___childrenMdx___children = 'post___socialImage___childrenMdx___children',
  post___socialImage___childMdx___rawBody = 'post___socialImage___childMdx___rawBody',
  post___socialImage___childMdx___fileAbsolutePath = 'post___socialImage___childMdx___fileAbsolutePath',
  post___socialImage___childMdx___slug = 'post___socialImage___childMdx___slug',
  post___socialImage___childMdx___body = 'post___socialImage___childMdx___body',
  post___socialImage___childMdx___excerpt = 'post___socialImage___childMdx___excerpt',
  post___socialImage___childMdx___headings = 'post___socialImage___childMdx___headings',
  post___socialImage___childMdx___html = 'post___socialImage___childMdx___html',
  post___socialImage___childMdx___mdxAST = 'post___socialImage___childMdx___mdxAST',
  post___socialImage___childMdx___tableOfContents = 'post___socialImage___childMdx___tableOfContents',
  post___socialImage___childMdx___timeToRead = 'post___socialImage___childMdx___timeToRead',
  post___socialImage___childMdx___childrenMdxBlogPost = 'post___socialImage___childMdx___childrenMdxBlogPost',
  post___socialImage___childMdx___childrenSidebar = 'post___socialImage___childMdx___childrenSidebar',
  post___socialImage___childMdx___childrenProject = 'post___socialImage___childMdx___childrenProject',
  post___socialImage___childMdx___id = 'post___socialImage___childMdx___id',
  post___socialImage___childMdx___children = 'post___socialImage___childMdx___children',
  post___socialImage___childrenImageSharp = 'post___socialImage___childrenImageSharp',
  post___socialImage___childrenImageSharp___gatsbyImageData = 'post___socialImage___childrenImageSharp___gatsbyImageData',
  post___socialImage___childrenImageSharp___id = 'post___socialImage___childrenImageSharp___id',
  post___socialImage___childrenImageSharp___children = 'post___socialImage___childrenImageSharp___children',
  post___socialImage___childImageSharp___gatsbyImageData = 'post___socialImage___childImageSharp___gatsbyImageData',
  post___socialImage___childImageSharp___id = 'post___socialImage___childImageSharp___id',
  post___socialImage___childImageSharp___children = 'post___socialImage___childImageSharp___children',
  post___socialImage___id = 'post___socialImage___id',
  post___socialImage___parent___id = 'post___socialImage___parent___id',
  post___socialImage___parent___children = 'post___socialImage___parent___children',
  post___socialImage___children = 'post___socialImage___children',
  post___socialImage___children___id = 'post___socialImage___children___id',
  post___socialImage___children___children = 'post___socialImage___children___children',
  post___socialImage___internal___content = 'post___socialImage___internal___content',
  post___socialImage___internal___contentDigest = 'post___socialImage___internal___contentDigest',
  post___socialImage___internal___description = 'post___socialImage___internal___description',
  post___socialImage___internal___fieldOwners = 'post___socialImage___internal___fieldOwners',
  post___socialImage___internal___ignoreType = 'post___socialImage___internal___ignoreType',
  post___socialImage___internal___mediaType = 'post___socialImage___internal___mediaType',
  post___socialImage___internal___owner = 'post___socialImage___internal___owner',
  post___socialImage___internal___type = 'post___socialImage___internal___type',
  post___body = 'post___body',
  post___fields___description = 'post___fields___description',
  post___fields___commentsStatus = 'post___fields___commentsStatus',
  post___fields___slug = 'post___fields___slug',
  post___fields___projectId = 'post___fields___projectId',
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
  email = 'email',
  inReplyTo = 'inReplyTo',
  url = 'url',
  path = 'path',
  isSpam = 'isSpam',
  isTrashed = 'isTrashed',
  ip = 'ip',
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
  internal___type = 'internal___type'
}

export type PostCommentFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  gravatarHash?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<MdxBlogPostFilterInput>;
  email?: Maybe<StringQueryOperatorInput>;
  inReplyTo?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  isSpam?: Maybe<BooleanQueryOperatorInput>;
  isTrashed?: Maybe<BooleanQueryOperatorInput>;
  ip?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PostCommentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PostCommentEdge>;
  nodes: Array<PostComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PostCommentGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type PostCommentGroupConnectionDistinctArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentGroupConnectionMaxArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentGroupConnectionMinArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentGroupConnectionSumArgs = {
  field: PostCommentFieldsEnum;
};


export type PostCommentGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PostCommentFieldsEnum;
};

export type PostCommentSortInput = {
  fields?: Maybe<Array<Maybe<PostCommentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Project = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  projectId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProjectGroupConnection>;
};


export type ProjectConnectionDistinctArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectConnectionMaxArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectConnectionMinArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectConnectionSumArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProjectFieldsEnum;
};

export type ProjectEdge = {
  next?: Maybe<Project>;
  node: Project;
  previous?: Maybe<Project>;
};

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
  title = 'title'
}

export type ProjectFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type ProjectFilterListInput = {
  elemMatch?: Maybe<ProjectFilterInput>;
};

export type ProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProjectGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ProjectGroupConnectionDistinctArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectGroupConnectionMaxArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectGroupConnectionMinArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectGroupConnectionSumArgs = {
  field: ProjectFieldsEnum;
};


export type ProjectGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProjectFieldsEnum;
};

export type ProjectSortInput = {
  fields?: Maybe<Array<Maybe<ProjectFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  blogPost?: Maybe<BlogPost>;
  allBlogPost: BlogPostConnection;
  mdxBlogPost?: Maybe<MdxBlogPost>;
  allMdxBlogPost: MdxBlogPostConnection;
  postComment?: Maybe<PostComment>;
  allPostComment: PostCommentConnection;
  sidebar?: Maybe<Sidebar>;
  allSidebar: SidebarConnection;
  project?: Maybe<Project>;
  allProject: ProjectConnection;
};


export type QueryFileArgs = {
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
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
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
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryThemeUiConfigArgs = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllThemeUiConfigArgs = {
  filter?: Maybe<ThemeUiConfigFilterInput>;
  sort?: Maybe<ThemeUiConfigSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  childrenMdxBlogPost?: Maybe<MdxBlogPostFilterListInput>;
  childMdxBlogPost?: Maybe<MdxBlogPostFilterInput>;
  childrenSidebar?: Maybe<SidebarFilterListInput>;
  childSidebar?: Maybe<SidebarFilterInput>;
  childrenProject?: Maybe<ProjectFilterListInput>;
  childProject?: Maybe<ProjectFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  imageCaptionText?: Maybe<StringQueryOperatorInput>;
  imageCaptionLink?: Maybe<StringQueryOperatorInput>;
  socialImage?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllBlogPostArgs = {
  filter?: Maybe<BlogPostFilterInput>;
  sort?: Maybe<BlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  imageCaptionText?: Maybe<StringQueryOperatorInput>;
  imageCaptionLink?: Maybe<StringQueryOperatorInput>;
  socialImage?: Maybe<FileFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxBlogPostArgs = {
  filter?: Maybe<MdxBlogPostFilterInput>;
  sort?: Maybe<MdxBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPostCommentArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  gravatarHash?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<MdxBlogPostFilterInput>;
  email?: Maybe<StringQueryOperatorInput>;
  inReplyTo?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  isSpam?: Maybe<BooleanQueryOperatorInput>;
  isTrashed?: Maybe<BooleanQueryOperatorInput>;
  ip?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllPostCommentArgs = {
  filter?: Maybe<PostCommentFilterInput>;
  sort?: Maybe<PostCommentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySidebarArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSidebarArgs = {
  filter?: Maybe<SidebarFilterInput>;
  sort?: Maybe<SidebarSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProjectArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllProjectArgs = {
  filter?: Maybe<ProjectFilterInput>;
  sort?: Maybe<ProjectSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Sidebar = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SidebarConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SidebarEdge>;
  nodes: Array<Sidebar>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SidebarGroupConnection>;
};


export type SidebarConnectionDistinctArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarConnectionMaxArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarConnectionMinArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarConnectionSumArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SidebarFieldsEnum;
};

export type SidebarEdge = {
  next?: Maybe<Sidebar>;
  node: Sidebar;
  previous?: Maybe<Sidebar>;
};

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
  title = 'title'
}

export type SidebarFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SidebarFilterListInput = {
  elemMatch?: Maybe<SidebarFilterInput>;
};

export type SidebarGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SidebarEdge>;
  nodes: Array<Sidebar>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SidebarGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SidebarGroupConnectionDistinctArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarGroupConnectionMaxArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarGroupConnectionMinArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarGroupConnectionSumArgs = {
  field: SidebarFieldsEnum;
};


export type SidebarGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SidebarFieldsEnum;
};

export type SidebarSortInput = {
  fields?: Maybe<Array<Maybe<SidebarFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
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
  internal___type = 'internal___type'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___addCommentUrl = 'siteMetadata___addCommentUrl',
  siteMetadata___author = 'siteMetadata___author',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  siteMetadata___social = 'siteMetadata___social',
  siteMetadata___social___name = 'siteMetadata___social___name',
  siteMetadata___social___url = 'siteMetadata___social___url',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
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
  internal___type = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  functionRoute = 'functionRoute',
  pluginName = 'pluginName',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  matchPath = 'matchPath',
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
  internal___type = 'internal___type'
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  previousId?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  sidebarSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  frontmatter?: Maybe<SitePageContextFrontmatter>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  previousId?: Maybe<StringQueryOperatorInput>;
  nextId?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  sidebarSlugs?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
};

export type SitePageContextFrontmatter = {
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextFrontmatterFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
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
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context___id',
  context___previousId = 'context___previousId',
  context___nextId = 'context___nextId',
  context___maxWidth = 'context___maxWidth',
  context___slug = 'context___slug',
  context___projectId = 'context___projectId',
  context___sidebarSlugs = 'context___sidebarSlugs',
  context___frontmatter___path = 'context___frontmatter___path',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___sourceMap = 'pluginCreator___pluginOptions___sourceMap',
  pluginCreator___pluginOptions___autoLabel = 'pluginCreator___pluginOptions___autoLabel',
  pluginCreator___pluginOptions___labelFormat = 'pluginCreator___pluginOptions___labelFormat',
  pluginCreator___pluginOptions___cssPropOptimization = 'pluginCreator___pluginOptions___cssPropOptimization',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator___pluginOptions___maxWidth',
  pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator___pluginOptions___showCaptions',
  pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  pluginCreator___pluginOptions___sizeByPixelDensity = 'pluginCreator___pluginOptions___sizeByPixelDensity',
  pluginCreator___pluginOptions___backgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  pluginCreator___pluginOptions___quality = 'pluginCreator___pluginOptions___quality',
  pluginCreator___pluginOptions___withWebp = 'pluginCreator___pluginOptions___withWebp',
  pluginCreator___pluginOptions___tracedSVG = 'pluginCreator___pluginOptions___tracedSVG',
  pluginCreator___pluginOptions___loading = 'pluginCreator___pluginOptions___loading',
  pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  pluginCreator___pluginOptions___disableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___output = 'pluginCreator___pluginOptions___output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  pluginCreator___pluginOptions___entryLimit = 'pluginCreator___pluginOptions___entryLimit',
  pluginCreator___pluginOptions___query = 'pluginCreator___pluginOptions___query',
  pluginCreator___pluginOptions___dest = 'pluginCreator___pluginOptions___dest',
  pluginCreator___pluginOptions___fonts = 'pluginCreator___pluginOptions___fonts',
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
  pluginCreator___pluginOptions___lessBabel = 'pluginCreator___pluginOptions___lessBabel',
  pluginCreator___pluginOptions___mediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  pluginCreator___pluginOptions___root = 'pluginCreator___pluginOptions___root',
  pluginCreator___pluginOptions___mdxOtherwiseConfigured = 'pluginCreator___pluginOptions___mdxOtherwiseConfigured',
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
  pluginCreatorId = 'pluginCreatorId'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  packageJson?: Maybe<SitePluginPackageJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___sourceMap = 'pluginOptions___sourceMap',
  pluginOptions___autoLabel = 'pluginOptions___autoLabel',
  pluginOptions___labelFormat = 'pluginOptions___labelFormat',
  pluginOptions___cssPropOptimization = 'pluginOptions___cssPropOptimization',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___markdownCaptions = 'pluginOptions___markdownCaptions',
  pluginOptions___sizeByPixelDensity = 'pluginOptions___sizeByPixelDensity',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___quality = 'pluginOptions___quality',
  pluginOptions___withWebp = 'pluginOptions___withWebp',
  pluginOptions___tracedSVG = 'pluginOptions___tracedSVG',
  pluginOptions___loading = 'pluginOptions___loading',
  pluginOptions___disableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  pluginOptions___disableBgImage = 'pluginOptions___disableBgImage',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___createLinkInHead = 'pluginOptions___createLinkInHead',
  pluginOptions___entryLimit = 'pluginOptions___entryLimit',
  pluginOptions___query = 'pluginOptions___query',
  pluginOptions___dest = 'pluginOptions___dest',
  pluginOptions___fonts = 'pluginOptions___fonts',
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
  pluginOptions___gatsbyRemarkPlugins___options___inlineCodeMarker = 'pluginOptions___gatsbyRemarkPlugins___options___inlineCodeMarker',
  pluginOptions___lessBabel = 'pluginOptions___lessBabel',
  pluginOptions___mediaTypes = 'pluginOptions___mediaTypes',
  pluginOptions___root = 'pluginOptions___root',
  pluginOptions___mdxOtherwiseConfigured = 'pluginOptions___mdxOtherwiseConfigured',
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
  internal___type = 'internal___type'
}

export type SitePluginFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  entryLimit?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  dest?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  mdxOtherwiseConfigured?: Maybe<Scalars['Boolean']>;
  contentPath?: Maybe<Scalars['String']>;
  basePath?: Maybe<Scalars['String']>;
  blogContentPath?: Maybe<Scalars['String']>;
  blogPostPath?: Maybe<Scalars['String']>;
  projectsContentPath?: Maybe<Scalars['String']>;
  projectsPath?: Maybe<Scalars['String']>;
  sidebarContentPath?: Maybe<Scalars['String']>;
  feedName?: Maybe<Scalars['String']>;
  feedPath?: Maybe<Scalars['String']>;
  feedUrl?: Maybe<Scalars['String']>;
  firebaseKeyPath?: Maybe<Scalars['String']>;
  firebaseConfig?: Maybe<SitePluginPluginOptionsFirebaseConfig>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
  pages?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
  pages?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeeds = {
  query?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  match?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  entryLimit?: Maybe<IntQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  dest?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<StringQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  mdxOtherwiseConfigured?: Maybe<BooleanQueryOperatorInput>;
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
};

export type SitePluginPluginOptionsFirebaseConfig = {
  databaseURL?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFirebaseConfigFilterInput = {
  databaseURL?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  resolve?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  inlineCodeMarker?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<StringQueryOperatorInput>;
  inlineCodeMarker?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  addCommentUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<Array<Maybe<SiteSiteMetadataSocial>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  addCommentUrl?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterListInput>;
};

export type SiteSiteMetadataSocial = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataSocialFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSocialFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataSocialFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ThemeUiConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ThemeUiConfigGroupConnection>;
};


export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionMaxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionMinArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionSumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigEdge = {
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export enum ThemeUiConfigFieldsEnum {
  preset = 'preset',
  prismPreset = 'prismPreset',
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
  internal___type = 'internal___type'
}

export type ThemeUiConfigFilterInput = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ThemeUiConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ThemeUiConfigGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ThemeUiConfigGroupConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionMaxArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionMinArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionSumArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigSortInput = {
  fields?: Maybe<Array<Maybe<ThemeUiConfigFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type FeedSiteQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedSiteQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl'>
      & { site_url: SiteSiteMetadata['siteUrl'] }
    )> }> };

export type FeedPostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedPostsQueryQuery = { allBlogPost: { nodes: Array<(
      Pick<MdxBlogPost, 'id' | 'body' | 'excerpt' | 'date' | 'title' | 'slug'>
      & { parent?: Maybe<Pick<Mdx, 'id' | 'html'>> }
    )> } };

export type CreateProjectPagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateProjectPagesQueryQuery = { allFile: { nodes: Array<{ childMdx?: Maybe<{ fields?: Maybe<Pick<MdxFields, 'projectId' | 'slug'>>, frontmatter?: Maybe<Pick<MdxFrontmatter, 'sidebar'>> }> }> } };

export type CommentFormQueryVariables = Exact<{ [key: string]: never; }>;


export type CommentFormQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'addCommentUrl'>> }> };

export type LatestBlogPostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestBlogPostsQueryQuery = { allBlogPost: { nodes: Array<(
      Pick<MdxBlogPost, 'id' | 'body' | 'slug' | 'title'>
      & { day: MdxBlogPost['date'], month: MdxBlogPost['date'], year: MdxBlogPost['date'] }
      & { fields?: Maybe<Pick<MdxFields, 'commentsStatus'>> }
    )> }, commentCounts: { group: Array<Pick<PostCommentGroupConnection, 'totalCount' | 'field' | 'fieldValue'>> } };

export type LayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'author' | 'title' | 'description'>> }> };

export type SiteSeoQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSeoQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'author' | 'siteUrl'>
      & { social?: Maybe<Array<Maybe<Pick<SiteSiteMetadataSocial, 'name'>>>> }
    )> }> };

export type ExtendedPostPageQueryVariables = Exact<{
  id: Scalars['String'];
  previousId?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['String']>;
}>;


export type ExtendedPostPageQuery = { blogPost?: Maybe<(
    Pick<MdxBlogPost, 'id' | 'excerpt' | 'body' | 'slug' | 'title' | 'tags' | 'date'>
    & { day: MdxBlogPost['date'], month: MdxBlogPost['date'], year: MdxBlogPost['date'] }
    & { fields?: Maybe<Pick<MdxFields, 'commentsStatus'>>, parent?: Maybe<{ frontmatter?: Maybe<(
        Pick<MdxFrontmatter, 'description'>
        & { featured_image?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<Pick<ImageSharpFluid, 'src'>> }> }> }
      )> }> }
  )>, comments: { nodes: Array<Pick<PostComment, 'id' | 'name' | 'body' | 'gravatarHash' | 'createdAt'>> }, previous?: Maybe<(
    Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
    & { fields?: Maybe<Pick<MdxFields, 'description'>> }
  )>, next?: Maybe<(
    Pick<MdxBlogPost, 'id' | 'excerpt' | 'slug' | 'title' | 'date'>
    & { fields?: Maybe<Pick<MdxFields, 'description'>> }
  )> };

export type ProjectPageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
  projectId: Scalars['String'];
  sidebarSlugs?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ProjectPageQueryQuery = { mdx?: Maybe<(
    Pick<Mdx, 'body'>
    & { frontmatter?: Maybe<Pick<MdxFrontmatter, 'title'>> }
  )>, relatedPosts: { nodes: Array<{ childMdxBlogPost?: Maybe<Pick<MdxBlogPost, 'date' | 'excerpt' | 'slug' | 'title'>> }> }, allSidebar: { nodes: Array<(
      Pick<Sidebar, 'slug' | 'title'>
      & { parent?: Maybe<Pick<Mdx, 'body'>> }
    )> } };
