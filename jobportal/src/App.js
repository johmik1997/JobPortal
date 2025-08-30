import { Routes, Route } from 'react-router-dom'

import Login from './features/auth/Login'
// import { ROLES } from './config/roles'
import useTitle from './hooks/useTitle'
import Register from './features/auth/Register'
import Home from './page/Home'
import JobPage from './page/Job'
import JobDetailsPage from './page/JobDetails'
import AboutPage from './page/AboutPage'
import ContactPage from './page/ContactPage'
import JobApplicationPage from './page/JobApplicationForm'
import CreateJobPage from './page/CreateJob'
import ApplicantDashboard from './page/ApplicantDashboard'
import ApplicantDetails from './page/ApplicationDetails'
import EmployerJobPage from './page/EmployerJobPage'
import JobForm from './components/JobForm'
import EmployerDashboard from './page/EmployerDashboard'
import AdminDashboard from './page/AdminDashboard'
import EditJobPage from './page/EditJobPage'

function App() {
  useTitle('TalentHub')

  return (
    <Routes>
      
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<AdminDashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="/dashboard/applicant" element={<ApplicantDashboard />} />
      <Route path="register" element={<Register />} />
      <Route path="jobs" element={<JobPage />} />
      <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="/application/:jobId" element={<JobApplicationPage />} />
      <Route path="/create/job" element={<CreateJobPage />} />
      <Route path="/jobs/edit/:id" element={<JobForm />} />

      <Route path="/dashboard/employer" element={<EmployerDashboard />} />
      <Route path="/dashboard/applicant" element={<ApplicantDashboard />} />
      <Route path="/employer/job" element={<EmployerJobPage />} />
      <Route path="/applications/:id" element={<ApplicantDetails />} />
      <Route path="/edit-job/:id" element={<EditJobPage />} />
    </Routes>
  )
}

export default App
