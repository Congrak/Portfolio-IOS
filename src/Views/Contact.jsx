export const Contact = () => {
  return (
    <div className="h-full w-full w-full h-full">
      <div className="flex justify-start text-2xl gap-2">
        <h1 className="pl-2">Contact</h1>
      </div>
      <div className="flex justify-start p-10 pt-3 w-full h-full gap-2">
        <ul>
          <li className="flex text-left text-gray-500 gap-2 pb-2">
            <p>
              <span className="font-bold text-red-500">Email:</span>{" "}
              rodricelis@gmail.com
            </p>
          </li>
          <li className="flex text-left text-gray-500 gap-2 pb-2">
            <p>
              <span className="font-bold text-red-500">GitHub:</span>{" "}
              <a href="https://github.com/Congrak">Rodrigo Celis</a>
            </p>
          </li>
          <li className="flex text-left text-gray-500 gap-2 pb-2">
            <p>
              <span className="font-bold text-red-500">LinkedIn:</span>{" "}
              <a href="https://www.linkedin.com/in/rodrigo-celis-zamora/">
                Rodrigo Celis
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
