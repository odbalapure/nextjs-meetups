import Head from "next/head";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function createMeetup() {
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <Fragment>
      <Head>
        <title>Create a meetup</title>
        <meta name="description" content="Create a meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default createMeetup;