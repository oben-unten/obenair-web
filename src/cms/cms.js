import CMS from 'decap-cms-app';
import StartseitePreview from '../previews/StartseitePreview';
import VereinPreview from '../previews/VereinPreview';

CMS.registerPreviewTemplate('Startseite', StartseitePreview);
CMS.registerPreviewTemplate('Verein', VereinPreview);

CMS.registerPreviewStyle('../styles/global.css', { raw: true });
