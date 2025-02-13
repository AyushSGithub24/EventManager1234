import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CreateEvent from "./pages/CreateEvent"
import EventDetails from "./pages/Eventdetails"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { AuthProvider } from "./Context/AuthContext"

function App() {
  return (
    <AuthProvider>
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
    </AuthProvider>
  )
}

export default App

