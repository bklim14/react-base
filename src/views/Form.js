import React from 'react';
import {Link, Switch, Route, useRouteMatch, Redirect} from "react-router-dom";

const Form = () =>  {
  let { path, url } = useRouteMatch();
  console.log(path, url)
  return (
    <div>
      <Link to={`${url}/create`}>
        <button className="btn btn-primary">
          Create
        </button>
      </Link>
      <Switch>
        <Route path={`${path}/create`}>
          <FormCreate />
        </Route>
        <Route path={`${path}/search`}>
          <FormSearch url={url} />
        </Route>
        <Redirect from={path} to={`${path}/search`} />
      </Switch>
    </div>
  );
}

const FormCreate = ({url}) => {
  return (
    <div>
      <Link to={`${url}/search`}>
        <button className="btn btn-primary">
          Back
        </button>
      </Link>
      Create
    </div>
  )
}

const FormSearch = () => {
  return <div>Search</div>
}

export default Form;
