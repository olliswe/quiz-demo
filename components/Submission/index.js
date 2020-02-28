import React from 'react';
import {View, Text} from 'react-native'
import {withSubmissionContext} from "../../state_management/submissionContext";

const Submission = (props) => {
    return (
        <View>
            <Text>
                Submission
            </Text>
        </View>
    );
};

export default withSubmissionContext(Submission);
