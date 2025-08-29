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
import UsersList from './features/users/UsersList'
import EditJobPage from './page/EditJobPage'

function App() {
  useTitle('Dan D. Repairs')

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



      {/* Protected Routes */}
      {/* <Route element={<PersistLogin />}>
        <Route
          element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
        >
          <Route element={<Prefetch />}>
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Welcome />} />

              {/* Example of restricting routes by role */}
              {/* <Route
                element={
                  <RequireAuth
                    allowedRoles={[ROLES.Manager, ROLES.Admin]}
                  />
                } */}
            
                {/* <Route path="users">
                  {/* Uncomment these when you add components */}
                  {/* <Route index element={<UsersList />} />
                  <Route path=":id" element={<EditUser />} /> */}
                  {/* <Route path="new" element={<NewUserForm />} /> */}
                {/* </Route> */} 
              {/* </Route> */}
            {/* </Route> */}
          {/* </Route> */}
        {/* </Route> */}
      {/* </Route> */}
    </Routes>
  )
}

export default App
