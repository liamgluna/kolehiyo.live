import { Link, useLoaderData } from "react-router-dom";
// import { toast } from "react-toastify";

interface University {
  id: number;
  name: string;
  founded: string;
  location: string;
  website: string;
  version: number;
}

interface Metadata {
  current_page: number;
  page_size: number;
  first_page: number;
  last_page: number;
  total_records: number;
}

interface UniversityData {
  metadata: Metadata;
  universities: University[];
}

const UniversitiesLoader = async () => {
  // const response = await fetch("https://api.kolehiyo.live/v0/universities");
  const response = await fetch("http://localhost:4000/v0/universities");

  const data: UniversityData = await response.json();
  return data.universities;
};

const UniversityCards = () => {
  const universities = useLoaderData() as University[];

  // const onClick = () => {
  //   toast.info("You clicked the button!");
  // };
  return (
    <>
      {/* <button className="btn btn-primary" onClick={onClick}>
        Click me!
      </button> */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {universities.map((university) => (
          <div
            key={university.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://www.dlsu.edu.ph/wp-content/uploads/2017/12/1DLSU-at-duskE.jpg"
                alt="iskol"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-bold">
                {university.name}
              </h2>
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

              <div className="card-actions">
                <Link
                  className="btn btn-primary"
                  to={`/universities/${university.id}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// const UniversityCards = () => {
//   const [universities, setUniversities] = useState<University[]>([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchUniversities = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:4000/api/v0/universities"
//         );
//         const data: UniversityData = await response.json();
//         setUniversities(data.universities);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUniversities();
//   }, []);

//   return (
//     <>
//       {loading && <Spinner loading={loading} />}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//         {error && <p>There was an error</p>}
//         {universities.map((university) => (
//           <div
//             key={university.id}
//             className="card card-compact w-96 bg-base-100 shadow-xl"
//           >
//             <figure>
//               <img
//                 src="https://www.dlsu.edu.ph/wp-content/uploads/2017/12/1DLSU-at-duskE.jpg"
//                 alt="iskol"
//               />
//             </figure>
//             <div className="card-body items-center text-center">
//               <h2 className="card-title text-xl font-bold">
//                 {university.name}
//               </h2>
//               <p>Founded: {university.founded}</p>
//               <p>Location: {university.location}</p>
//               <a
//                 className="link link-primary"
//                 href={university.website}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {university.website}
//               </a>

//               <div className="card-actions">
//                 <Link
//                   className="btn btn-primary"
//                   to={`/universities/${university.id}`}
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

export { UniversityCards as default, UniversitiesLoader };
