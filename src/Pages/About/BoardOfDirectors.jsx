import "./css/BoardOfDirectors.css";

const BoardOfDirectors = () => {
  const boardMembers = [
    {
      id: 1,
      name: "Tomade Williams",
      title: "Chief Executive Officer",
      image:
        "https://i.postimg.cc/d33W1pZT/3f90fe132d8ddc030c808230a8d7d589173cbc52.png",
    },
    {
      id: 2,
      name: "Itunu Williams",
      title: "Managing Director",
      image:
        "https://i.postimg.cc/DmVqTMqM/5d26429a1067df937e362faa277448740bb8c801.jpg",
    },
    {
      id: 3,
      name: "Adeola Ifeanyi",
      title: "Lead Strategist",
      image:
        "https://i.postimg.cc/prjsz8C7/43a0ccf71f49d9cc2bd21fce954f605510b33094.png",
    },
  ];
  return (
    <section className="board-section">
      <h2>Board of Directors</h2>
      <div className="board_container">
        {boardMembers.map((item) => (
          <div key={item.id} className="cards_holder">
            <div className="image-container">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardOfDirectors;