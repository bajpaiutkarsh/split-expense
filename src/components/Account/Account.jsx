import { useAuth0 } from "@auth0/auth0-react";
const Account = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};
export default Account;
