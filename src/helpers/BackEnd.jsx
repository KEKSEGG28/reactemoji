// import { useEffect, useState } from "react";

// const FetchBackend = () => {
//   const [state, setState] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:7002/api/emoji")
//       .then((response) => response.json())
//       .then((json) => setState(json));
//   }, []);
//   return (
//     <div>
//       <h1>Server data fetching</h1>
//       {state &&
//         state.map(({ id, name, email }) => {
//           return (
//             <div key={id}>
//               Name: {name}
//               E-mail: {email}
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default FetchBackend;
