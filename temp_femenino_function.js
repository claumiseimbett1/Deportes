        // Función independiente para agregar resultados femeninos al PDF (SIMPLIFICADA COMO MASCULINO)
        async function addFemeninoResultsToPDF(pdf, startY, allSheetData) {
            let yPosition = startY;
            
            // Título de sección
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(16);
            pdf.setTextColor(11, 16, 57);
            pdf.text("CLASIFICACIÓN GENERAL FEMENINA", 20, yPosition);
            yPosition += 20;
            
            console.log('📊 DEBUG PDF - Datos femeninos disponibles:', allSheetData.femenino.length);
            if (allSheetData.femenino.length > 0) {
                console.log('📊 PDF: Procesando datos femeninos, primera fila:', allSheetData.femenino[0]);
                const tableData = allSheetData.femenino.map((row, index) => {
                    // Mapear columnas A-I: A=Pos, B=Atleta, C=Equipo, D=Edad, E=Categoría, F=Pts Totales, G=Pts 200m, H=Pts 50m, I=Pts 100m
                    const [pos, athlete, team, age, category, totalPoints, points200m, points50m, points100m] = row;
                    return {
                        position: pos || (index + 1).toString(),
                        athlete: athlete || '',
                        team: team || '',
                        age: age || '',
                        category: category || '',
                        totalPoints: totalPoints || '',
                        points200m: points200m || '',
                        points50m: points50m || '',
                        points100m: points100m || '',
                        genderType: 'femenino'
                    };
                });
                
                yPosition = drawProfessionalTable(pdf, tableData, yPosition, 'gender');
            } else {
                console.warn('⚠️ PDF: No hay datos femeninos para mostrar');
                pdf.setFont("helvetica", "normal");
                pdf.setFontSize(10);
                pdf.setTextColor(128, 128, 128);
                pdf.text("No se encontraron datos de clasificación femenina", 20, yPosition);
                yPosition += 20;
            }
            
            return yPosition;
        }