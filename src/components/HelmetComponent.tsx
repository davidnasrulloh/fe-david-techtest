import { Helmet } from 'react-helmet'

interface HelmetProps {
    title: string
}

const HelmetComponent = ({title}: HelmetProps) => {
    return (
        <Helmet>
            <title>David | {title}</title>
            <meta name="description" content="David Tehcnical Test" />
        </Helmet>
    )
}

export default HelmetComponent