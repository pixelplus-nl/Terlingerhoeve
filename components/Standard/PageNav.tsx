export default function PageNav(props: any) {
  return (
    <>
      {props.nav.menu.menuItems.nodes.map((item: any, index: any) => {
        return (
          <>
            <p>{item.label}</p>
          </>
        );
      })}
    </>
  );
}
