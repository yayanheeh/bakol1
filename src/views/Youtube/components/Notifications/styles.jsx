export default theme => ({
  root: {},
  form: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  group: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  card: {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
},
  card:hover: {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
},
  img: {
  border-radius: 5px 5px 0 0;
},
 container: {
  padding: 2px 16px;
},
 groupLabel: {
    paddingLeft: theme.spacing.unit * 2
  },
  field: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    width: '320px',
    maxWidth: '100%',
    marginRight: theme.spacing.unit * 3
  },
  portletFooter: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});
