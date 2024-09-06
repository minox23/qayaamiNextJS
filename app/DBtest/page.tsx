import db from "@server/database/DBconnect";

const persons = await db.selectFrom("User").selectAll("User").execute();

const DBtest = () => {
  return (
    <div className="m-10">
     <p className="font-semibold text-xl">Names of Service Providers</p> 
      <ul className="list-decimal list-outside">
        {persons.map((person: any) => (
          <li key={person.id}>{person.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DBtest;
