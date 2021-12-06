import CMS from 'netlify-cms-app';
import StartseitePreview from '../previews/StartseitePreview';
import VereinPreview from '../previews/VereinPreview';
import styles from '../styles/global.css';

CMS.registerPreviewTemplate('Startseite', StartseitePreview);
CMS.registerPreviewTemplate('Verein', VereinPreview);

CMS.registerPreviewStyle(styles.toString(), { raw: true });