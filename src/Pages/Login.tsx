import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/redux/loginSlice";

const Login = () => {
  const isAuthenticated = useAppSelector((state) => state.isAuthenticated);
  const hasAccount = useAppSelector((state) => state.hasAccount);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      dispatch(login({ username: username, password: password }));
      setIsLoading(false);
    }, 2500);
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center px-4 font-main">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back!
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Login to access your health dashboard
        </p>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <div className="mt-1 relative">
              <input
                id="email"
                value={username}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Enter your name"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <Mail
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                value={password}
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
          </div>
          {!hasAccount && <p className='text-red-500 font-bold'>Invalid details</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Login
          </button>
          <div className="mt-6 text-center text-sm text-gray-500">
            <div>
              Forgot your password?{" "}
              <p className="text-blue-600 hover:underline">Reset it here</p>
            </div>
            <div className="mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register now
              </Link>
            </div>
          </div>
        </form>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 z-20 w-full h-full bg-[#21212190]">
          <div className="flex justify-center items-center h-full w-full px-4 ssm:p-2">
            <div className="bg-white w-[200px] h-[200px] p-2 flex justify-center items-center rounded">
              <div className="flex flex-col items-center gap-2">
                <div className="loader1"></div>
                <div>Please Wait...</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
