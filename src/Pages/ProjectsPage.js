import React from 'react'
import PropTypes from 'prop-types'
import { CreateProjectCard, ProjectsCard } from '../Components/Cards'
import { Grid } from '@material-ui/core'
import _ from 'underscore'


function ProjectsPage(props) {
    return (
        <>
            {
                _.range(10).map((value,index)=>(
                    <Grid item key={index}>
                        <ProjectsCard/>
                    </Grid>
                ))

            }
            <Grid item>
                <CreateProjectCard/>
            </Grid>
        </>
    )
}

ProjectsPage.propTypes = {

}

export default ProjectsPage

