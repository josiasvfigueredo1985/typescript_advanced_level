const site: unknown = 'https://test.com'
const favSites: string[] = []
// favSites.push(site) // Argument of type 'unknown' is not assignable to parameter of type 'string'.
favSites.push(site as string)
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
favSites.push(<string>site) // Not recommended due other language frameworks as JSX mix HTML and Typescript
