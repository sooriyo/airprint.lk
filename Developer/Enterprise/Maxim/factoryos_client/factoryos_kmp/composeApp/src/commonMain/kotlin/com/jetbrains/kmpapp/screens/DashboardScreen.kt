package com.jetbrains.kmpapp.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jetbrains.kmpapp.components.HeaderPill
import com.jetbrains.kmpapp.components.MetricCard
import com.jetbrains.kmpapp.components.ProductionPackPill
import com.jetbrains.kmpapp.components.WorkOrderCard
import com.jetbrains.kmpapp.components.popups.ProductionSchedulePopup
import com.jetbrains.kmpapp.components.popups.UpdateQuantityPopup
import com.jetbrains.kmpapp.theme.KmpAppColors
import com.jetbrains.kmpapp.theme.KmpAppTypography

@Composable
fun DashboardScreen() {
    var showSchedulePopup by remember { mutableStateOf(false) }
    var showUpdateQuantityPopup by remember { mutableStateOf(false) }

    Scaffold(
        containerColor = KmpAppColors.LightCardBackground,
        bottomBar = { 
            BottomActionBar(
                onScheduleClick = { showSchedulePopup = true },
                onUpdateQuantityClick = { showUpdateQuantityPopup = true }
            ) 
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            Header()
            
            // Main Content
            Row(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth(),
                verticalAlignment = Alignment.Top
            ) {
                // Left Column (Main Stats)
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .padding(12.dp)
                ) {
                    WorkOrderCard()
                    Spacer(modifier = Modifier.height(10.dp))
                    
                    ProductionPackScrollView()
                    Spacer(modifier = Modifier.height(10.dp))
                    
                    Row(
                        modifier = Modifier.height(120.dp)
                    ) {
                        Box(modifier = Modifier.weight(1f)) { TargetCard() }
                        Spacer(modifier = Modifier.width(10.dp))
                        Box(modifier = Modifier.weight(1f)) { ProducedCard() }
                    }
                    Spacer(modifier = Modifier.height(8.dp))
                    
                    // Bottom Metrics
                    Row(
                        modifier = Modifier
                            .height(90.dp)
                            .fillMaxWidth()
                    ) {
                        Box(modifier = Modifier.weight(1f)) {
                            MetricCard(label = "REJECTED", value = "12", subtext = "0.9%")
                        }
                        Spacer(modifier = Modifier.width(8.dp))
                        Box(modifier = Modifier.weight(1f)) {
                            MetricCard(label = "EFFICIENCY", value = "92%", subtext = "+2.1%")
                        }
                        Spacer(modifier = Modifier.width(8.dp))
                        Box(modifier = Modifier.weight(1f)) {
                            MetricCard(label = "SPEED", value = "450", subtext = "UNITS/HR")
                        }
                        Spacer(modifier = Modifier.width(8.dp))
                        Box(modifier = Modifier.weight(1f)) {
                            MetricCard(label = "DOWNTIME", value = "15m", subtext = "TODAY")
                        }
                    }
                }
            }
        }
        
        if (showSchedulePopup) {
            ProductionSchedulePopup(onDismiss = { showSchedulePopup = false })
        }
        
        if (showUpdateQuantityPopup) {
            UpdateQuantityPopup(onDismiss = { showUpdateQuantityPopup = false })
        }
    }
}

@Composable
fun Header() {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .background(KmpAppColors.DarkBackground)
            .padding(horizontal = 16.dp, vertical = 10.dp)
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(
                text = "FactoryOS",
                style = KmpAppTypography.HeaderStyle.copy(fontSize = 16.sp)
            )
            Spacer(modifier = Modifier.weight(1f))
            HeaderPill(text = "M-101")
            Spacer(modifier = Modifier.width(8.dp))
            HeaderPill(text = "SHIFT A / 06:00 - 14:00")
            Spacer(modifier = Modifier.width(8.dp))
            HeaderPill(text = "FRI, 10 NOV")
            // Icon would go here
        }
    }
}

@Composable
fun ProductionPackScrollView() {
    Row(
        modifier = Modifier
            .height(40.dp)
            .horizontalScroll(rememberScrollState())
    ) {
        val packs = listOf(
            "PP202509/0010411", "PP202509/0010412", "PP202509/0010413",
            "PP202509/0010414", "PP202509/0010415"
        )
        
        packs.forEachIndexed { index, pack ->
            ProductionPackPill(pack)
            if (index < packs.size - 1) {
                Spacer(modifier = Modifier.width(8.dp))
            }
        }
    }
}

@Composable
fun TargetCard() {
    Box(
        modifier = Modifier
            .fillMaxHeight()
            .fillMaxWidth()
            .background(
                color = KmpAppColors.LightCardBackground,
                shape = RoundedCornerShape(8.dp)
            )
            .padding(14.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("TARGET QUANTITY", style = KmpAppTypography.MetricLabelStyle)
            Text("5,000", style = KmpAppTypography.MetricValueLargeStyle)
            Text("UNITS", style = KmpAppTypography.MetricLabelStyle)
        }
    }
}

@Composable
fun ProducedCard() {
    Box(
        modifier = Modifier
            .fillMaxHeight()
            .fillMaxWidth()
            .background(
                color = KmpAppColors.PrimaryGreen,
                shape = RoundedCornerShape(8.dp)
            )
            .padding(14.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                "PRODUCED",
                style = KmpAppTypography.MetricLabelStyle.copy(color = KmpAppColors.TextPrimary)
            )
            Text("1,240", style = KmpAppTypography.MetricValueLargeStyle)
            Text("24.8%", style = KmpAppTypography.PercentageStyle)
        }
    }
}

@Composable
fun BottomActionBar(
    onScheduleClick: () -> Unit,
    onUpdateQuantityClick: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(56.dp)
    ) {
        BottomButton(
            text = "PAUSE",
            backgroundColor = KmpAppColors.PrimaryGreen,
            textColor = KmpAppColors.TextPrimary,
            modifier = Modifier.weight(1f),
            onClick = {}
        )
        BottomButton(
            text = "VIEW SCHEDULE",
            backgroundColor = KmpAppColors.DarkBackground,
            textColor = Color.White,
            modifier = Modifier.weight(1f),
            onClick = onScheduleClick
        )
        BottomButton(
            text = "UPDATE QUANTITY",
            backgroundColor = KmpAppColors.DarkBackground,
            textColor = Color.White,
            modifier = Modifier.weight(1f),
            onClick = onUpdateQuantityClick
        )
    }
}

@Composable
fun BottomButton(
    text: String,
    backgroundColor: Color,
    textColor: Color,
    modifier: Modifier = Modifier,
    onClick: () -> Unit
) {
    Button(
        onClick = onClick,
        colors = ButtonDefaults.buttonColors(
            containerColor = backgroundColor,
            contentColor = textColor
        ),
        shape = RectangleShape,
        modifier = modifier.fillMaxHeight()
    ) {
        Text(
            text = text,
            style = KmpAppTypography.ButtonText.copy(color = textColor)
        )
    }
}
