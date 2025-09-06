import { CaseStudySectionHeader } from "./case-study-section-header";

interface CaseStudySolutionProps {
    architectureOverview?: string;
    keyPatternsAndComponents?: string[];
    consideredTradeoffs?: string[];
}

export function CaseStudySolution({ architectureOverview = "", keyPatternsAndComponents = [], consideredTradeoffs = [] }: CaseStudySolutionProps) {
    return (
        <div className="mx-16 my-32 space-y-4">
            <CaseStudySectionHeader title="Solution Design" />
            <div className="flex flex-col gap-4 lg:gap-16">
                {
                    architectureOverview && (
                        <div>
                            <h3 className="font-bold">Architecture Overview</h3>
                            <p>{architectureOverview}</p>
                        </div>
                    )
                }
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
                    {
                        keyPatternsAndComponents && (
                            <div className="flex-1">
                                <h3 className="font-bold">Key patterns & Components</h3>
                                <ul className="list-disc list-inside pl-2">
                                    {
                                        keyPatternsAndComponents.map((keyPatternAndComponent) => (
                                            <li key={keyPatternAndComponent}>{keyPatternAndComponent}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                    {
                        consideredTradeoffs && (
                            <div className="flex-1">
                                <h3 className="font-bold">Considered Tradeoffs</h3>
                                <p>{consideredTradeoffs}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}