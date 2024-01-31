package com.apigateway.api.process.model.protocol;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "process_protocol")
public class ProcessProtocol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String signature;
    private EProcessTypProtocol eProcessTypProtocol;
}
