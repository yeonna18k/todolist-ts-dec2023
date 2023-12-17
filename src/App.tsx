import GlobalStyle from "./styles/GlobalStyles";
import { MainPage } from "./page/MainPage";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ToastContainer />
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
