import { Banner } from './sections/banner';
import { Banner2 } from './sections/banner-2/Banner2';
import { Banner3 } from './sections/banner-3';
import { Collection } from './sections/collection';
import Collection3 from './sections/collection-3/Collection3';
import Collection4 from './sections/collection-4/Collection4';
import { PrintEtnicoSection } from './sections/print-etnico';

function App() {
    return (
        <div>
            <Banner />
            <PrintEtnicoSection />
            <Banner2 />
            <Collection />
            <Banner3 />
            <Collection3 />
            <Collection4 />
        </div>
    );
}

export default App;
