import EngineeringStandards from '@/components/Projects/EngineeringStandards'
import ExploreProjects from '@/components/Projects/ExploreProjects'
import FeaturedHighlight from '@/components/Projects/FeaturedHighlight'
import ProjectsCTA from '@/components/Projects/ProjectsCTA'
import ProjectsHero from '@/components/Projects/ProjectsHero'
import React from 'react'

const ProjectsContainer = () => {
    return (
        <>
            <ProjectsHero />
            <ExploreProjects />
            <FeaturedHighlight />
            <EngineeringStandards />
            <ProjectsCTA />
        </>
    )
}

export default ProjectsContainer