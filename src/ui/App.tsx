import { Banner } from './sections/banner';
import { Banner2 } from './sections/banner-2/Banner2';
import { Collection } from './sections/collection';
import { PrintEtnicoSection } from './sections/print-etnico';

function App() {
    return (
        <div>
            <Banner />
            <PrintEtnicoSection />
            <Banner2 />
            <Collection />
        </div>
    );
}

export default App;
