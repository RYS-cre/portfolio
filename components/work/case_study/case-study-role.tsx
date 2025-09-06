import { CaseStudySectionHeader } from "./case-study-section-header";

interface CaseStudyRoleProps {
    roleOverview?: string;
    rolePoints?: string[];
    roleImage?: string;
}

export function CaseStudyRole({ roleOverview = "", rolePoints = [], roleImage = "" }: CaseStudyRoleProps) {
    return (
        <div className="mx-16 my-32 space-y-4">
            <CaseStudySectionHeader title="My Role & Responsibilities" />
            <div>
                <p>{roleOverview || "No specific role overview was identified for this project."}</p>
            </div>
            <div>
                <div>
                    {
                        rolePoints.length === 0 && (
                            <p>No specific responsibilities were identified for this project.</p>
                        )
                    } 
                    <ul className="list-disc list-inside pl-2">
                        {
                            rolePoints.map((rolePoint) => (
                                <li key={rolePoint}>{rolePoint}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <img src={roleImage} alt={rolePoints[0] || 'no role image'} />
                </div>
            </div>
        </div>
    )
}