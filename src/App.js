import './App.css';
import { Routes, Route} from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/TopBar';
import Sidebar from './scenes/global/sideBar'
import Dashboard from './scenes/Dashboard'
// import Team from './scenes/Team'
// import Invoices from './scenes/Invoices'
// import Contacts from './scenes/Contacts'
// import Bar from './scenes/Bar'
// import Line from './scenes/Line'
// import Form from './scenes/Form'
// import Pie from './scenes/Pie'
// import Faq from './scenes/Faq'
// import Geography from './scenes/Geography'
// import Calender from './scenes/Calender'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className='content'>
             <Topbar />
             <Routes>
                 <Route path='/' element={<Dashboard />} />
                 {/* <Route path='/team' element={<Team />} /> */}
                 {/* <Route path='/invoices' element={<Invoices />} /> */}
                 {/* <Route path='/contacts' element={<Contacts />} /> */}
                 {/* <Route path='/bar' element={<Bar />} /> */}
                 {/* <Route path='/line' element={<Line />} /> */}
                 {/* <Route path='/form' element={<Form />} /> */}
                 {/* <Route path='/pie' element={<Pie />} /> */}
                 {/* <Route path='/faq' element={<Faq />} /> */}
                 {/* <Route path='/geogtaphy' element={<Geography />} /> */}
                 {/* <Route path='/calender' element={<Calender />} /> */}
             </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
