import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface University {
  id: number;
  name: string;
  founded: string;
  location: string;
  website: string;
  img_url: string;
  version: number;
}

interface Payload {
  university: University;
}

const University = () => {
  const university = useLoaderData() as University;

  return (
    <>
      {/* {loading && <Spinner loading={loading} />}
      {error && <p>There was an error</p>} */}
      {university && (
        <>
          <figure>
            <img src={university.img_url} alt="iskol" />
          </figure>
          <div className="card-body items-center">
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
