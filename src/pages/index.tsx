import { GetServerSideProps, NextPage } from "next";
import Song from "../models/Song";
import { ISong } from "../interfaces/song";
import { DataTable } from "@/components/song/data-table";
import { columns } from "@/components/song/columns";



interface Props {
  songs: ISong[];
}

const Home: NextPage<Props> = ({ songs }) => {
  return (
    <main className="container mx-auto mt-3">
      <header>
        <h1 className="text-center text-6xl">Guitar Repo</h1>
      </header>
      <div className="flex justify-center border mt-5">
        <div className="border border-cyan-400 w-3/4">
          <DataTable columns={columns} />
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Realiza la consulta a la base de datos para obtener las canciones
    const songs = await Song.findAll();
    console.log(songs);

    // Convierte los datos de canciones en un arreglo
    const songsArray = songs.map((song) => song.toJSON()) as ISong[];
    console.log(songsArray);

    return {
      props: {
        songs: songsArray,
      },
    };
  } catch (error) {
    console.error("Error retrieving users:", error);

    return {
      props: {
        users: [],
      },
    };
  }
};

export default Home;
