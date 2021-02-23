import {GridList, GridListTile, Typography} from "@material-ui/core"
import {makeStyles, Paper} from "@material-ui/core";

const style = makeStyles({
    news: {
        borderBottom : "1px solid black"
    },
    news_list: {
        borderTop : "1px solid black",
        borderRight : "1px solid black",
        borderLeft : "1px solid black",
    }
})

const News = ({className}) => {
    const classes = style()

    // TODO : Overflow News

    return (
        <Paper className={className}>
            <GridList cols={1} cellHeight={'auto'} className={classes.news_list}>
                {
                    [
                        {title: 'title1', content: 'content\ncontent\ncontent\ncontent'},
                        {title: 'title2', content: 'content\ncontent\ncontent\ncontent'},
                        {title: 'title3', content: 'content\ncontent\ncontent\ncontent'},
                        {title: 'title4', content: 'content\ncontent\ncontent\ncontent'},
                        {title: 'title5', content: 'content\ncontent\ncontent\ncontent'},
                        {title: 'title6', content: 'content\ncontent\ncontent\ncontent'},
                        {title: 'title7', content: 'content\ncontent\ncontent\ncontent'},
                        {title: 'title8', content: 'content\ncontent\ncontent\ncontent'},
                    ].map(({title, content}) => (
                        <GridListTile key={title} className={classes.news}>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                            <pre>
                                {content}
                            </pre>
                        </GridListTile>
                    ))
                }
            </GridList>
        </Paper>
    )
}

export default News
