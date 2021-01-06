import { SiteFrame } from './Layout';
import { Dashboard, ProjectsPage } from './Pages';


function App() {
  return (
    <div className="App">
      <SiteFrame>
        <ProjectsPage/>
      </SiteFrame>
    </div>
  );
}

export default App;
