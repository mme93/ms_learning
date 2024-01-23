package com.apigateway.api.process.model;

import jakarta.persistence.*;
import lombok.*;


@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "process")
public class Process {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private EProcessEvent processTyp;

    @Enumerated(EnumType.STRING)
    private EProcessTyp processMods;

    @Column(unique = true, nullable = false)
    private String processName;

    private String processText;

    private boolean hasDependedProcess;

    private boolean isDependedProcess;

    @Column(length = 1000)
    private String dependedProcessIds;

    public Process(EProcessEvent processTyp, EProcessTyp processMods, String processName, String processText, boolean hasDependedProcess, boolean isDependedProcess, String dependedProcessIds) {
        this.processTyp = processTyp;
        this.processMods = processMods;
        this.processName = processName;
        this.processText = processText;
        this.hasDependedProcess = hasDependedProcess;
        this.isDependedProcess = isDependedProcess;
        this.dependedProcessIds = dependedProcessIds;
    }
}
