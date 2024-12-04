import JobCard from '@/components/blocks/landing-page/marketing/career/job-card';
import JoinUsComp from '@/components/blocks/landing-page/marketing/career/join-us-comp';
import { JobI } from '@/pages/careers';

type Props = {
    data: JobI[];
}

const JobSection = ({data}: Props) => {
  return (
    <>
        {data && data.length > 0 ? 
            <>
                <div className="w-full px-4 lg:px-10 max-w-5xl xl:max-w-7xl mx-auto text-left">
                    {data.map((job) => {
                        return (<JobCard key={`job_key_${job._id}`} job={job}/>);
                    })}
                </div>
            
            </> 
            : 
            <div className="mx-12 my-8 rounded-xl overflow-hidden">
                <JoinUsComp title2="No current openings. Submit your details for future opportunities." />
            </div>
        }
    </>
  )
}

export default JobSection