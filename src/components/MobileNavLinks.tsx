import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/order-status"
        className="flex bg-white hover:text-green-500 gap-2 font-bold"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white hover:text-green-500 gap-2 font-bold"
      >
        My Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white hover:text-green-500 gap-2 font-bold"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center font-bold px-3 hover:bg-gray-700"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
