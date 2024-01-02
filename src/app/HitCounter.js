import { readFile } from "../helpers/file-helpers";
import { writeFile } from "../helpers/file-helpers";

function HitCounter() {
  const DATABASE_PATH = "/src/database.json";
  const { hits } = JSON.parse(readFile(DATABASE_PATH));
  writeFile(DATABASE_PATH, JSON.stringify({ hits: hits + 1 }));

  return <div>{hits}</div>;
}

export default HitCounter;
