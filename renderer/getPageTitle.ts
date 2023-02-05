
interface GetPagePropsReturn {
  title: string;
  description?: string
}

export function getPageProps(pageContext: {
  exports: { documentProps?: GetPagePropsReturn }
  documentProps?: { title: string }
}): GetPagePropsReturn {

  const props: GetPagePropsReturn = (pageContext.exports.documentProps || { title: 'syta.co' })
  return props
}