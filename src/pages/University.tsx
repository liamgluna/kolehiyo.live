import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
;
// import Spinner from "../components/Spinner";

interface University {
  id: number;
  name: string;
  founded: string;
  location: string;
  website: string;
  version: number;
}

interface Payload {
  university: University;
}

const University = () => {
  // const { id } = useParams<{ id: string }>();
  const university = useLoaderData() as University;

  // const [university, setUniversity] = useState<University>();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchUniversity = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:4000/api/v0/universities/${id}`
  //       );
  //       const data: Payload = await response.json();
  //       console.log(data.university);
  //       setUniversity(data.university);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUniversity();
  // }, []);

  return (
    <>
      {/* {loading && <Spinner loading={loading} />}
      {error && <p>There was an error</p>} */}
      {university && (
        <>
          <figure>
            <img
              src="https://www.dlsu.edu.ph/wp-content/uploads/2017/12/1DLSU-at-duskE.jpg"
              alt="iskol"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">{university?.name}</h2>
            <p>Founded: {university.founded}</p>
            <p>Location: {university.location}</p>
            <a
              className="link link-primary"
              href={university.website}
              target="_blank"
              rel="noreferrer"
            >
              {university.website}
            </a>
          </div>
        </>
      )}
    </>
  );
};

const UniversityLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://api.kolehiyo.live/v0/universities/${params.id}`
    // `http://localhost:4000/v0/universities/${params.id}`
  );
  const data: Payload = await response.json();
  console.log(data.university);
  return data.university;
};

export { University as default, UniversityLoader };
