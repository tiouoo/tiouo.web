interface PageNav {
  title: string;
  path: string;
  weight?: number;
  description?: string;
  component: RawRouteComponent;
}
export default PageNav;
