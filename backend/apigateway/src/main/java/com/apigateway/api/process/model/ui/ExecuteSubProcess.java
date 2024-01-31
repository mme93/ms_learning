package com.apigateway.api.process.model.ui;

import com.apigateway.api.process.model.process.EProcessClassification;
import com.apigateway.api.process.model.process.EProcessEvent;
import com.apigateway.api.process.model.process.EProcessPlausibility;
import com.apigateway.api.process.model.process.EProcessTyp;
import lombok.*;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExecuteSubProcess {

    private String signature;

    private String theme;

    private EProcessEvent processEvent;

    private EProcessTyp processTyp;

    private EProcessClassification processClassification;

    private EProcessPlausibility processPlausibility;

    private String processName;

    private String processText;

    private String time;
}
