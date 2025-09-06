import { CaseStudySectionHeader } from "./case-study-section-header";

interface CaseStudyProblemProps {
    painPoints?: string[];
    constraints?: string[];
    goal?: string;
}

export function CaseStudyProblem({ painPoints = [], constraints = [], goal = "" }: CaseStudyProblemProps) {
    // TODO: Add images and other proof for points given as props
    return (
        <div className="mx-16 my-32 space-y-4">
            <CaseStudySectionHeader title="Context & Problem" />
            <div className="flex flex-col lg:flex-row gap-16">
                <div >
                    <h3 className="font-bold">Initial State & Pain Points</h3>
                    <div>
                        {
                            painPoints.length === 0 && (
                                <p>No specific pain points were identified for this project.</p>
                            )
                        }
                        <ul className="list-disc list-inside pl-2">
                            {
                                painPoints.map((painPoint) => (
                                    <li key={painPoint}>{painPoint}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div >
                    <h3 className="font-bold">Constraints</h3>
                    <div>
                        {
                            constraints.length === 0 && (
                                <p>No specific constraints were identified for this project.</p>
                            )
                        }
                        <ul className="list-disc list-inside pl-2">
                            {constraints.map((constraint) => (
                                <li key={constraint}>{constraint}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div >
                    <h3 className="font-bold">Goal</h3>
                    <div>
                        {
                            goal === "" && (
                                <p>No specific goal was identified for this project.</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}