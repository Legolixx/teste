import ImageComp from "@/components/Image";
import { getXataClient } from "@/utils/xata";

const xata = getXataClient();

export default async function Home() {
  
  const res = await xata.db.img.getAll()

  const teste = res.toSerializable()

  return (
   
    <ImageComp images={teste} />

  );
}

