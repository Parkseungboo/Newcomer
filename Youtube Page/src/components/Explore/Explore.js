import Layout from "../shared/Layout";
import youtubeData from "../../data/youtubeData.json";
import Card from "./Card";

function Explore() {
  return (
    <Layout activeMenu="explore">
      <div>
        {youtubeData.data.map(function (value, index) {
          return <Card key={`card-${index}`} value={value} />;
        })}
      </div>
    </Layout>
  );
}

export default Explore;