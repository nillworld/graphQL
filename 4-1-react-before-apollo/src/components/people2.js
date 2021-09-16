import './components.css';

function People2() {
  function AsideItems() {
    return <div></div>;
  }

  function MainContents() {
    return <div></div>;
  }

  return (
    <div id="people" className="component">
      <aside>{AsideItems()}</aside>
      <section className="contents">{MainContents()}</section>
    </div>
  );
}

export default People2;
